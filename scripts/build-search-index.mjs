import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import * as pagefind from "pagefind";

const siteRoot = process.cwd();

const dynamicSources = [
  { url: "/arsenal/", title: "Огнестрельное оружие", files: ["arsenal/index.html"] },
  { url: "/clothing-info/", title: "Одежда", files: ["clothing-info/index.html"] },
  { url: "/dungeons/", title: "Данжи", files: ["dungeons/index.html"] },
  { url: "/events/", title: "События", files: ["events/index.html"] },
  { url: "/fish-collector/", title: "Рыболовный коллекционер", files: ["fish-collector/index.html"] },
  { url: "/melee-info/", title: "Холодное оружие", files: ["melee-info/index.html", "melee-info/data.js"] },
  { url: "/pokemon-collection/", title: "Коллекция Pokemon", files: ["pokemon-collection/index.html"] },
  { url: "/stash/", title: "Тайники", files: ["stash/index.html"] },
  { url: "/vehicle-collector/", title: "Автомобильный коллекционер", files: ["vehicle-collector/index.html"] },
  { url: "/vehicles-info/", title: "Транспорт", files: ["vehicles-info/index.html", "vehicles-info/data.js"] },
  { url: "/weapon-collector/", title: "Оружейный коллекционер", files: ["weapon-collector/index.html"] }
];

function readWindowData(source, property) {
  const context = { window: {} };
  vm.runInNewContext(source, context, { timeout: 1000 });
  return context.window[property];
}

function readArsenalData(source) {
  const start = source.indexOf("    const suppressorIcon =");
  const end = source.indexOf("    const tabsRoot =");
  if (start < 0 || end < 0) throw new Error("Unable to locate arsenal data");
  const context = {};
  vm.runInNewContext(`${source.slice(start, end)}\nglobalThis.__seriesData = seriesData;`, context, { timeout: 1000 });
  return context.__seriesData;
}

function readInlineConst(source, name) {
  const match = new RegExp(`\\bconst\\s+${name}\\s*=`).exec(source);
  if (!match) throw new Error(`Unable to locate ${name}`);
  const start = source.slice(match.index + match[0].length).search(/[\[{]/) + match.index + match[0].length;
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (["'", "\"", "`"].includes(char)) {
      quote = char;
      continue;
    }
    if (char === "{" || char === "[") depth += 1;
    if (char === "}" || char === "]") depth -= 1;
    if (depth === 0) {
      const context = {};
      vm.runInNewContext(`globalThis.value = (${source.slice(start, index + 1)});`, context, { timeout: 1000 });
      return context.value;
    }
  }
  throw new Error(`Unable to parse ${name}`);
}

async function addRecord(record) {
  const result = await index.addCustomRecord({
    language: "ru",
    ...record
  });
  if (result.errors.length) throw new Error(result.errors.join("\n"));
}

function plainText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

async function addVehicleRecords() {
  const source = await readFile(path.join(siteRoot, "vehicles-info/data.js"), "utf8");
  const data = readWindowData(source, "vehicleGuideData");
  const categories = new Map((data.vehicleCategories || []).map((item) => [item.id, item.label]));

  for (const [categoryId, entries] of Object.entries(data.vehicleGroups || {})) {
    for (const entry of entries) {
      if (!entry?.id || !entry.title) continue;
      const description = [
        `Категория: ${categories.get(categoryId) || categoryId}`,
        entry.speed && `Макс. скорость: ${entry.speed}`,
        entry.slots && `Слоты: ${entry.slots}`,
        Array.isArray(entry.attachments) && entry.attachments.length && `Аттачи: ${entry.attachments.join(", ")}`,
        entry.note,
        entry.search
      ].filter(Boolean).map(plainText).join(". ");
      await addRecord({
        url: `/vehicles-info/?item=${encodeURIComponent(entry.id)}`,
        content: description,
        meta: { title: entry.title }
      });
    }
  }
}

async function addMeleeRecords() {
  const source = await readFile(path.join(siteRoot, "melee-info/data.js"), "utf8");
  const data = readWindowData(source, "meleeGuideData");
  const categories = new Map((data.meleeCategories || []).map((item) => [item.id, item.label]));

  for (const item of data.meleeItems || []) {
    if (!item?.key || !item.title) continue;
    const categoryIds = Array.isArray(item.category) ? item.category : [item.category];
    const description = [
      `Категория: ${categoryIds.map((id) => categories.get(id) || id).filter(Boolean).join(", ")}`,
      item.handType,
      item.skinningSpeed && `Скорость разделки: ${item.skinningSpeed}`,
      item.damagePrimary && `${item.damagePrimaryLabel || "Урон"}: ${item.damagePrimary}`,
      item.damageSecondary && `${item.damageSecondaryLabel || "Доп. урон"}: ${item.damageSecondary}`,
      item.radiusSkinning && `Радиус: ${item.radiusSkinning}`,
      item.search
    ].filter(Boolean).map(plainText).join(". ");
    await addRecord({
      url: `/melee-info/?item=${encodeURIComponent(item.key)}`,
      content: description,
      meta: { title: item.title }
    });
  }
}

async function addArsenalRecords() {
  const source = await readFile(path.join(siteRoot, "arsenal/index.html"), "utf8");
  const seriesData = readArsenalData(source);

  for (const series of seriesData) {
    for (const [weaponIndex, weapon] of (series.weapons || []).entries()) {
      if (!weapon?.name) continue;
      const ammo = (Array.isArray(weapon.ammo) ? weapon.ammo : [weapon.ammo])
        .map((item) => typeof item === "string" ? item : item?.label)
        .filter(Boolean)
        .join(", ");
      const description = [
        `Серия: ${series.name}`,
        weapon.damage && `Урон: ${Array.isArray(weapon.damage) ? weapon.damage.map((item) => `${item.label}: ${item.value}`).join(", ") : weapon.damage}`,
        weapon.fireModes && `Режимы стрельбы: ${weapon.fireModes}`,
        weapon.fireRate && `Скорострельность: ${weapon.fireRate}`,
        ammo && `Боеприпасы: ${ammo}`,
        Array.isArray(weapon.magTypes) && weapon.magTypes.length && `Магазин: ${weapon.magTypes.join(", ")}`
      ].filter(Boolean).map(plainText).join(". ");
      await addRecord({
        url: `/arsenal/?series=${encodeURIComponent(series.id)}&weapon=${weaponIndex}`,
        content: description,
        meta: { title: weapon.name }
      });
    }
  }
}

async function addClothingRecords() {
  const source = await readFile(path.join(siteRoot, "clothing-info/index.html"), "utf8");
  const outfits = readInlineConst(source, "outfits");
  for (const outfit of outfits) {
    if (!outfit?.slug || !outfit.name) continue;
    const versions = Array.isArray(outfit.versions) ? outfit.versions.map((item) => item.label).filter(Boolean).join(", ") : outfit.version;
    const description = [
      versions && `Варианты: ${versions}`,
      Array.isArray(outfit.slots) && outfit.slots.length && `Слоты: ${outfit.slots.map((item) => `${item.label}: ${item.value}`).join(", ")}`
    ].filter(Boolean).map(plainText).join(". ");
    await addRecord({ url: `/clothing-info/#${encodeURIComponent(outfit.slug)}`, content: description, meta: { title: outfit.name } });
  }
}

async function addDungeonRecords() {
  const source = await readFile(path.join(siteRoot, "dungeons/index.html"), "utf8");
  for (const dungeon of readInlineConst(source, "dungeons")) {
    if (!dungeon?.title) continue;
    const description = [
      dungeon.map && `Карта: ${dungeon.map}`,
      dungeon.difficulty && `Сложность: ${dungeon.difficulty}`,
      dungeon.bosses && `Боссы: ${dungeon.bosses}`,
      dungeon.lead,
      ...(dungeon.facts || [])
    ].filter(Boolean).map(plainText).join(". ");
    await addRecord({ url: `/dungeons/?dungeon=${encodeURIComponent(dungeon.id)}`, content: description, meta: { title: dungeon.title } });
  }
}

async function addEventRecords() {
  const source = await readFile(path.join(siteRoot, "events/index.html"), "utf8");
  const eventMaps = readInlineConst(source, "eventMaps");
  for (const [map, events] of Object.entries(eventMaps)) {
    for (const event of events) {
      if (!event?.title) continue;
      const description = [
        `Карта: ${map}`,
        ...(event.description || []),
        ...(event.related || []).map((item) => item.title)
      ].filter(Boolean).map(plainText).join(". ");
      await addRecord({ url: `/events/?map=${encodeURIComponent(map)}&event=${encodeURIComponent(event.id)}`, content: description, meta: { title: event.title } });
    }
  }
}

async function addVehicleCollectorRecords() {
  const source = await readFile(path.join(siteRoot, "vehicle-collector/index.html"), "utf8");
  const vehicleNames = readInlineConst(source, "vehicleNames");
  for (const [index, name] of vehicleNames.entries()) {
    await addRecord({
      url: `/vehicle-collector/#vehicle-collector-item-${index + 1}`,
      content: "Коллекционная машинка. Автомобильный коллекционер.",
      meta: { title: name }
    });
  }
}

function extractStringLiterals(source, isHtml) {
  const scriptSource = isHtml
    ? [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]).join("\n")
    : source;
  const literals = scriptSource.match(/(['"`])((?:\\.|[\s\S])*?)\1/g) ?? [];
  const values = literals
    .map((literal) => literal.slice(1, -1))
    .map((value) => value
      .replace(/\\(?:n|r|t)/g, " ")
      .replace(/\\([\\'"`])/g, "$1")
      .replace(/<[^>]*>/g, " ")
      .replace(/\$\{[^}]*\}/g, " ")
      .replace(/\s+/g, " ")
      .trim())
    .filter((value) => /[A-Za-zА-Яа-яЁё]/.test(value))
    .filter((value) => !value.startsWith("/") && !value.includes("//"));

  return [...new Set(values)].join("\n");
}

const { index } = await pagefind.createIndex({
  forceLanguage: "ru",
  excludeSelectors: [".site-footer", ".breadcrumbs", ".page-top", ".scroll-top-btn", ".site-search"]
});

const { errors, page_count: pageCount } = await index.addDirectory({
  path: siteRoot,
  glob: "**/*.html"
});

if (errors.length) {
  throw new Error(errors.join("\n"));
}

for (const source of dynamicSources.filter((item) => !["/arsenal/", "/clothing-info/", "/dungeons/", "/events/", "/vehicle-collector/", "/vehicles-info/", "/melee-info/"].includes(item.url))) {
  const contents = await Promise.all(source.files.map(async (file) => ({
    file,
    source: await readFile(path.join(siteRoot, file), "utf8")
  })));
  const content = contents
    .map(({ file, source: sourceText }) => extractStringLiterals(sourceText, file.endsWith(".html")))
    .join("\n");

  await addRecord({
    url: source.url,
    content,
    meta: { title: source.title }
  });
}

await addVehicleRecords();
await addMeleeRecords();
await addArsenalRecords();
await addClothingRecords();
await addDungeonRecords();
await addEventRecords();
await addVehicleCollectorRecords();

const output = await index.writeFiles({ outputPath: path.join(siteRoot, "pagefind") });

if (output.errors.length) {
  throw new Error(output.errors.join("\n"));
}

console.log(`Indexed ${pageCount} HTML pages and ${dynamicSources.length} dynamic sections.`);
await pagefind.close();
