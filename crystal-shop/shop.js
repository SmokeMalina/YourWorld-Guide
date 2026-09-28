(() => {
  const search = document.getElementById("crystalShopSearch");
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const products = [...document.querySelectorAll(".crystal-product")];
  const count = document.getElementById("crystalShopCount");
  const empty = document.getElementById("crystalShopEmpty");
  if (!search || !count || !empty) return;

  const dialog = document.getElementById("crystalItemDialog");
  const dialogTitle = document.getElementById("crystalItemTitle");
  const dialogDescription = document.getElementById("crystalItemDescription");
  const dialogPreview = document.getElementById("crystalItemPreview");
  const dialogPrice = document.getElementById("crystalItemPrice");
  const dialogClose = document.getElementById("crystalItemClose");
  const dialogPrev = document.getElementById("crystalItemPrev");
  const dialogNext = document.getElementById("crystalItemNext");
  const dialogVariantCount = document.getElementById("crystalItemVariantCount");
  let modalVariants = [];
  let modalVariantIndex = 0;
  let modalProduct = null;

  function showModalVariant() {
    const image = dialogPreview?.querySelector("img");
    if (!image || !modalVariants.length) return;
    image.src = modalVariants[modalVariantIndex];
    dialogVariantCount.textContent = `${modalVariantIndex + 1} / ${modalVariants.length}`;
  }

  function changeModalVariant(direction) {
    if (modalVariants.length < 2) return;
    modalVariantIndex = (modalVariantIndex + direction + modalVariants.length) % modalVariants.length;
    showModalVariant();
    modalProduct?.querySelectorAll(".variant-dot")[modalVariantIndex]?.click();
  }

  function createPrice(amount) {
    const price = document.createElement("span");
    price.className = "crystal-product__price";
    const icon = document.createElement("img");
    icon.src = "/images/money_razmen/1_crystal.png";
    icon.alt = "";
    icon.width = 18;
    icon.height = 18;
    const value = document.createElement("span");
    value.textContent = amount || "—";
    price.append(value, icon);
    price.setAttribute("aria-label", amount ? `Цена: ${amount} кристаллов` : "Цена пока не указана");
    return price;
  }

  products.forEach((product) => {
    const body = product.querySelector(".crystal-product__body");
    if (!body) return;
    const amount = product.dataset.price?.trim();
    body.appendChild(createPrice(amount));

    if (product.dataset.kind !== "item" || !dialog) return;
    const title = product.querySelector("h3")?.textContent?.trim() || "Предмет";
    product.tabIndex = 0;
    product.setAttribute("role", "button");
    const hasVariants = product.querySelector(".variant-slider") !== null;
    product.setAttribute("aria-label", hasVariants
      ? `Подробнее: ${title}. Варианты переключаются стрелками влево и вправо.`
      : `Подробнее: ${title}`);

    const open = () => {
      dialogTitle.textContent = title;
      dialogDescription.textContent = product.querySelector(".crystal-product__description")?.textContent?.trim() || "Описание предмета уточняется.";
      const preview = product.querySelector(".crystal-product__art img")?.cloneNode(true);
      dialogPreview.replaceChildren(...(preview ? [preview] : []));
      const variantKey = product.querySelector(".variant-slider")?.dataset.variant;
      modalVariants = variantKey ? window.CRAFT_VARIANTS?.[variantKey] || [] : [];
      modalProduct = modalVariants.length > 1 ? product : null;
      modalVariantIndex = Math.max(0, [...product.querySelectorAll(".variant-dot")]
        .findIndex((dot) => dot.classList.contains("active")));
      const canSwitch = modalVariants.length > 1;
      dialogPrev.hidden = !canSwitch;
      dialogNext.hidden = !canSwitch;
      dialogVariantCount.hidden = !canSwitch;
      if (canSwitch) showModalVariant();
      dialogPrice.replaceChildren(createPrice(amount));
      dialog.showModal();
    };
    product.addEventListener("click", open);
    product.addEventListener("keydown", (event) => {
      if (hasVariants && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        const dots = [...product.querySelectorAll(".variant-dot")];
        if (dots.length) {
          event.preventDefault();
          const current = Math.max(0, dots.findIndex((dot) => dot.classList.contains("active")));
          const direction = event.key === "ArrowRight" ? 1 : -1;
          dots[(current + direction + dots.length) % dots.length].click();
        }
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  dialogClose?.addEventListener("click", () => dialog.close());
  dialogPrev?.addEventListener("click", () => changeModalVariant(-1));
  dialogNext?.addEventListener("click", () => changeModalVariant(1));
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      changeModalVariant(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  const normalize = (value) => String(value).toLocaleLowerCase("ru").replace(/ё/g, "е").trim();
  let category = "all";

  function update() {
    const query = normalize(search.value);
    let visible = 0;
    products.forEach((product) => {
      const matchesCategory = category === "all" || product.dataset.kind === category;
      const matchesSearch = !query || normalize(product.textContent).includes(query);
      product.hidden = !matchesCategory || !matchesSearch;
      if (!product.hidden) visible += 1;
    });
    count.textContent = `Показано: ${visible} из ${products.length}`;
    empty.hidden = visible > 0;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      category = button.dataset.filter;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      update();
    });
  });

  const incomingSearch = new URLSearchParams(location.search).get("search");
  if (incomingSearch) search.value = incomingSearch;
  search.addEventListener("input", update);
  update();
})();
