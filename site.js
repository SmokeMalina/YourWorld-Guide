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
      "/craft/categories/crates.html": "Крафт ящиков",
      "/craft/categories/knife.html": "Крафт ножей",
      "/craft/categories/sets.html": "Крафт сетов",
      "/craft/categories/clothing.html": "Крафт одежды",
      "/craft/categories/weapons.html": "Крафт оружия",
      "/craft/categories/mag_dark.html": "Крафт магазинов Dark",
      "/craft/categories/mag_bloody.html": "Крафт магазинов Bloody",
      "/craft/categories/mag_immortal.html": "Крафт магазинов Immortal",
      "/craft/categories/mag_phantom.html": "Крафт магазинов Phantom",
      "/craft/categories/suppressor.html": "Крафт глушителей"
    };

    const path = location.pathname.replace(/\/$/, "");
    const crumbs = [];

    const isIndex = path === "" || path === "/index.html";
    const isCraftIndex = path === "/craft" || path === "/craft/index.html";
    const isCategory = path.startsWith("/craft/categories/");
    const isCraftItem = path.startsWith("/craft/") && !isCraftIndex && !isCategory;

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

  document.addEventListener("DOMContentLoaded", () => {
    addBreadcrumbs();
    enableHistoryBack();
    saveScrollOnNav();
    restoreScroll();
  });
})();
