(() => {
  function createCrumb(tag, text, href) {
    const el = document.createElement(tag);
    el.textContent = text;
    if (href) el.href = href;
    return el;
  }

  function addBreadcrumbs() {
    const pageTop = document.querySelector(".page-top");
    if (!pageTop) return;

    const existing = pageTop.querySelector(".breadcrumbs");
    if (existing) return;

    const h1 = document.querySelector("h1");
    const currentTitle = h1 ? h1.textContent.trim() : document.title;

    const map = {
      "/craft/categories/workbench.html": "Крафтовый стол",
      "/craft/categories/items.html": "Крафт предметов",
      "/craft/categories/electronic.html": "Крафт электроники",
      "/craft/categories/conserv.html": "Крафт консерв",
      "/craft/categories/medicine.html": "Крафт медицины",
      "/craft/categories/cases.html": "Крафт кейсов",
      "/craft/categories/crates.html": "Крафт ящиков/бочек/сундуков",
      "/craft/categories/knife.html": "Крафт ножей",
      "/craft/categories/sets.html": "Крафт сетов",
      "/craft/categories/clothing.html": "Крафт одежды",
      "/craft/categories/weapons.html": "Крафт оружия",
      "/craft/categories/mag_dark.html": "Крафт магазинов Dark",
      "/craft/categories/mag_bloody.html": "Крафт магазинов Bloody",
      "/craft/categories/mag_immortal.html": "Крафт магазинов Immortal",
      "/craft/categories/mag_phantom.html": "Крафт магазинов Phantom",
      "/craft/categories/suppressor.html": "Крафт глушителей",
      "/craft/categories/craft_resources.html": "Крафт компонентов"
    };

    const path = location.pathname.replace(/\/$/, "");
    const crumbs = [];

    const isIndex = path === "" || path === "/index.html";
    const isCraftIndex = path === "/craft" || path === "/craft/index.html";
    const isCategory = path.startsWith("/craft/categories/");
    const isCraftItem = path.startsWith("/craft/") && !isCraftIndex && !isCategory;
    const isRecyclerIndex = path === "/recycler" || path === "/recycler/index.html";
    const isRecyclerInfo = path === "/recycler/info.html";
    const isGardeningIndex = path === "/gardening" || path === "/gardening/index.html";
    const isFarmingIndex = path === "/farming" || path === "/farming/index.html";
    const isLootboxIndex = path === "/cases" || path === "/cases/index.html";
    const isBbpIndex = path === "/bbp" || path === "/bbp/index.html";
    const isP2pIndex = path === "/p2p" || path === "/p2p/index.html";
    const isMeleeInfoIndex = path === "/melee-info" || path === "/melee-info/index.html";
    const isVehiclesInfoIndex = path === "/vehicles-info" || path === "/vehicles-info/index.html";
    const isClothingInfoIndex = path === "/clothing-info" || path === "/clothing-info/index.html";
    const isArsenalIndex = path === "/arsenal" || path === "/arsenal/index.html";
    const isWeaponCollectorIndex = path === "/weapon-collector" || path === "/weapon-collector/index.html";
    const isVehicleCollectorIndex = path === "/vehicle-collector" || path === "/vehicle-collector/index.html";
    const isFishCollectorIndex = path === "/fish-collector" || path === "/fish-collector/index.html";
    const isPokemonCollectionIndex = path === "/pokemon-collection" || path === "/pokemon-collection/index.html";
    const isMoneyExchangeIndex = path === "/money-exchange" || path === "/money-exchange/index.html";
    const isMiningIndex = path === "/mining" || path === "/mining/index.html";
    const isVoteIndex = path === "/vote" || path === "/vote/index.html";
    const isCustomsIndex = path === "/customs" || path === "/customs/index.html";
    const isStashIndex = path === "/stash" || path === "/stash/index.html";
    const isHoochIndex = path === "/hooch" || path === "/hooch/index.html";
    const isBrodyagaIndex = path === "/brodyaga" || path === "/brodyaga/index.html";
    const isConnectIndex = path === "/connect" || path === "/connect/index.html";
    const isRetexTableIndex = path === "/retex-table" || path === "/retex-table/index.html";
    const isRanksIndex = path === "/ranks" || path === "/ranks/index.html";
    const isAchievementsIndex = path === "/achievements" || path === "/achievements/index.html";
    const isDungeonsIndex = path === "/dungeons" || path === "/dungeons/index.html";
    const isEventsIndex = path === "/events" || path === "/events/index.html";
    const isTeleportsIndex = path === "/teleports" || path === "/teleports/index.html";
    const isShronIndex = path === "/shron" || path === "/shron/index.html";
    const isRepairBarrelIndex = path === "/repair-barrel" || path === "/repair-barrel/index.html";

    if (isIndex) {
      crumbs.push({ title: "Главная" });
    } else {
      crumbs.push({ title: "Главная", href: "/index.html" });
    }

    if (path.startsWith("/craft")) {
      if (isCraftIndex) {
        crumbs.push({ title: "Крафт" });
      } else {
        crumbs.push({ title: "Крафт", href: "/craft/index.html" });
      }
    }

    if (path.startsWith("/recycler")) {
      if (isRecyclerIndex) {
        crumbs.push({ title: "Переработчик" });
      } else {
        crumbs.push({ title: "Переработчик", href: "/recycler/index.html" });
      }
    }

    if (path.startsWith("/gardening")) {
      if (isGardeningIndex) {
        crumbs.push({ title: "Садоводство" });
      } else {
        crumbs.push({ title: "Садоводство", href: "/gardening/index.html" });
      }
    }

    if (path.startsWith("/farming")) {
      if (isFarmingIndex) {
        crumbs.push({ title: "Фермерство" });
      } else {
        crumbs.push({ title: "Фермерство", href: "/farming/index.html" });
      }
    }

    if (path.startsWith("/cases")) {
      if (isLootboxIndex) {
        crumbs.push({ title: "Кейсы" });
      } else {
        crumbs.push({ title: "Кейсы", href: "/cases/index.html" });
      }
    }

    if (path.startsWith("/connect")) {
      if (isConnectIndex) {
        crumbs.push({ title: "Как зайти на сервер" });
      } else {
        crumbs.push({ title: "Как зайти на сервер", href: "/connect/index.html" });
      }
    }

    if (path.startsWith("/bbp")) {
      if (isBbpIndex) {
        crumbs.push({ title: "Стройка" });
      } else {
        crumbs.push({ title: "Стройка", href: "/bbp/index.html" });
      }
    }

    if (path.startsWith("/p2p")) {
      if (isP2pIndex) {
        crumbs.push({ title: "P2P трейд" });
      } else {
        crumbs.push({ title: "P2P трейд", href: "/p2p/index.html" });
      }
    }

    if (path.startsWith("/vote")) {
      if (isVoteIndex) {
        crumbs.push({ title: "Голосование Wargm" });
      } else {
        crumbs.push({ title: "Голосование Wargm", href: "/vote/index.html" });
      }
    }

    if (path.startsWith("/customs")) {
      if (isCustomsIndex) {
        crumbs.push({ title: "Кастомизация" });
      } else {
        crumbs.push({ title: "Кастомизация", href: "/customs/index.html" });
      }
    }

    if (path.startsWith("/mining")) {
      if (isMiningIndex) {
        crumbs.push({ title: "Майнинг" });
      } else {
        crumbs.push({ title: "Майнинг", href: "/mining/index.html" });
      }
    }

    if (path.startsWith("/melee-info")) {
      if (isMeleeInfoIndex) {
        crumbs.push({ title: "Холодное оружие" });
      } else {
        crumbs.push({ title: "Холодное оружие", href: "/melee-info/index.html" });
      }
    }

    if (path.startsWith("/vehicles-info")) {
      if (isVehiclesInfoIndex) {
        crumbs.push({ title: "Транспорт" });
      } else {
        crumbs.push({ title: "Транспорт", href: "/vehicles-info/index.html" });
      }
    }

    if (path.startsWith("/clothing-info")) {
      if (isClothingInfoIndex) {
        crumbs.push({ title: "Одежда" });
      } else {
        crumbs.push({ title: "Одежда", href: "/clothing-info/index.html" });
      }
    }

    if (path.startsWith("/arsenal")) {
      if (isArsenalIndex) {
        crumbs.push({ title: "Огнестрельное оружие" });
      } else {
        crumbs.push({ title: "Огнестрельное оружие", href: "/arsenal/index.html" });
      }
    }

    if (path.startsWith("/weapon-collector")) {
      if (isWeaponCollectorIndex) {
        crumbs.push({ title: "Оружейный коллекционер" });
      } else {
        crumbs.push({ title: "Оружейный коллекционер", href: "/weapon-collector/index.html" });
      }
    }

    if (path.startsWith("/vehicle-collector")) {
      if (isVehicleCollectorIndex) {
        crumbs.push({ title: "Автомобильный коллекционер" });
      } else {
        crumbs.push({ title: "Автомобильный коллекционер", href: "/vehicle-collector/index.html" });
      }
    }

    if (path.startsWith("/fish-collector")) {
      if (isFishCollectorIndex) {
        crumbs.push({ title: "Рыболовный коллекционер" });
      } else {
        crumbs.push({ title: "Рыболовный коллекционер", href: "/fish-collector/index.html" });
      }
    }

    if (path.startsWith("/pokemon-collection")) {
      if (isPokemonCollectionIndex) {
        crumbs.push({ title: "Коллекция Pokemon" });
      } else {
        crumbs.push({ title: "Коллекция Pokemon", href: "/pokemon-collection/index.html" });
      }
    }

    if (path.startsWith("/money-exchange")) {
      if (isMoneyExchangeIndex) {
        crumbs.push({ title: "Размен валюты" });
      } else {
        crumbs.push({ title: "Размен валюты", href: "/money-exchange/index.html" });
      }
    }

    if (path.startsWith("/stash")) {
      if (isStashIndex) {
        crumbs.push({ title: "Тайники" });
      } else {
        crumbs.push({ title: "Тайники", href: "/stash/index.html" });
      }
    }

    if (path.startsWith("/hooch")) {
      if (isHoochIndex) {
        crumbs.push({ title: "Самогоноварение" });
      } else {
        crumbs.push({ title: "Самогоноварение", href: "/hooch/index.html" });
      }
    }

    if (path.startsWith("/brodyaga")) {
      if (isBrodyagaIndex) {
        crumbs.push({ title: "Бродячий торговец" });
      } else {
        crumbs.push({ title: "Бродячий торговец", href: "/brodyaga/index.html" });
      }
    }

    if (path.startsWith("/retex-table")) {
      if (isRetexTableIndex) {
        crumbs.push({ title: "Стол для покраски" });
      } else {
        crumbs.push({ title: "Стол для покраски", href: "/retex-table/index.html" });
      }
    }

    if (path.startsWith("/ranks")) {
      if (isRanksIndex) {
        crumbs.push({ title: "Ранги" });
      } else {
        crumbs.push({ title: "Ранги", href: "/ranks/index.html" });
      }
    }

    if (path.startsWith("/achievements")) {
      if (isAchievementsIndex) {
        crumbs.push({ title: "Ачивки" });
      } else {
        crumbs.push({ title: "Ачивки", href: "/achievements/index.html" });
      }
    }

    if (path.startsWith("/dungeons")) {
      if (isDungeonsIndex) {
        crumbs.push({ title: "Данжи" });
      } else {
        crumbs.push({ title: "Данжи", href: "/dungeons/index.html" });
      }
    }

    if (path.startsWith("/events")) {
      if (isEventsIndex) {
        crumbs.push({ title: "События" });
      } else {
        crumbs.push({ title: "События", href: "/events/index.html" });
      }
    }

    if (path.startsWith("/teleports")) {
      if (isTeleportsIndex) {
        crumbs.push({ title: "Телепорты" });
      } else {
        crumbs.push({ title: "Телепорты", href: "/teleports/index.html" });
      }
    }

    if (path.startsWith("/shron")) {
      if (isShronIndex) {
        crumbs.push({ title: "Персональный схрон" });
      } else {
        crumbs.push({ title: "Персональный схрон", href: "/shron/index.html" });
      }
    }

    if (path.startsWith("/repair-barrel")) {
      if (isRepairBarrelIndex) {
        crumbs.push({ title: "Бочка-чинилка" });
      } else {
        crumbs.push({ title: "Бочка-чинилка", href: "/repair-barrel/index.html" });
      }
    }

    if (isCategory) {
      crumbs.push({ title: currentTitle });
    }

    if (isCraftItem) {
      const backBtn = pageTop.querySelector(".back-btn");
      const backHref = backBtn ? backBtn.getAttribute("href") : "";
      const catTitle = map[backHref] || "Категория";
      if (backHref) {
        crumbs.push({ title: catTitle, href: backHref });
      }
      crumbs.push({ title: currentTitle });
    }

    if (isRecyclerInfo) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/bbp/") && !isBbpIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/p2p/") && !isP2pIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/melee-info/") && !isMeleeInfoIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/vehicles-info/") && !isVehiclesInfoIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/clothing-info/") && !isClothingInfoIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/retex-table/") && !isRetexTableIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/ranks/") && !isRanksIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/achievements/") && !isAchievementsIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/dungeons/") && !isDungeonsIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/teleports/") && !isTeleportsIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/shron/") && !isShronIndex) {
      crumbs.push({ title: currentTitle });
    }

    if (path.startsWith("/repair-barrel/") && !isRepairBarrelIndex) {
      crumbs.push({ title: currentTitle });
    }

    const nav = document.createElement("nav");
    nav.className = "breadcrumbs";
    nav.setAttribute("aria-label", "Навигация");

    crumbs.forEach((c, idx) => {
      const isLast = idx === crumbs.length - 1;
      if (c.href && !isLast) {
        nav.appendChild(createCrumb("a", c.title, c.href));
      } else {
        const span = document.createElement("span");
        span.className = "crumb-current";
        span.textContent = c.title;
        nav.appendChild(span);
      }
      if (!isLast) {
        const sep = document.createElement("span");
        sep.className = "crumb-sep";
        sep.textContent = "›";
        nav.appendChild(sep);
      }
    });

    pageTop.appendChild(nav);
  }

  function enableHistoryBack() {
    document.querySelectorAll(".back-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        if (history.length > 1) {
          e.preventDefault();
          history.back();
        }
      });
    });
  }

  function saveScrollOnNav() {
    const isCategory = location.pathname.startsWith("/craft/categories/");
    if (!isCategory) return;

    document.querySelectorAll("a[href]").forEach(link => {
      link.addEventListener("click", () => {
        try {
          const key = `scroll:${location.pathname}`;
          sessionStorage.setItem(key, String(window.scrollY || 0));
        } catch (_) {
          // ignore storage errors
        }
      });
    });
  }

  function restoreScroll() {
    try {
      const key = `scroll:${location.pathname}`;
      const value = sessionStorage.getItem(key);
      if (!value) return;
      const y = parseInt(value, 10);
      if (!Number.isNaN(y)) {
        requestAnimationFrame(() => window.scrollTo(0, y));
      }
      sessionStorage.removeItem(key);
    } catch (_) {
      // ignore storage errors
    }
  }

  function addScrollTopButton() {
    if (document.querySelector(".scroll-top-btn")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "scroll-top-btn";
    button.setAttribute("aria-label", "Наверх");
    button.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 18V6M12 6L7 11M12 6L17 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    const toggleVisibility = () => {
      button.classList.toggle("is-visible", (window.scrollY || 0) > 420);
    };

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.body.appendChild(button);
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
  }

  function removeStoreLinks() {
    document.querySelectorAll("a[href]").forEach(link => {
      const href = (link.getAttribute("href") || "").trim();
      const label = (link.textContent || "").trim().toLowerCase();
      const isStoreUrl = href === "https://yourworlddayz.ru/" || href === "https://yourworlddayz.ru";
      const isFooterStoreLink = label === "магазин" && link.closest(".site-footer, .footer-links, header, nav");

      if (isStoreUrl || isFooterStoreLink) {
        link.remove();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    removeStoreLinks();
    addBreadcrumbs();
    enableHistoryBack();
    saveScrollOnNav();
    restoreScroll();
    addScrollTopButton();
  });
})();
