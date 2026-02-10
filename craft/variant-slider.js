(function () {
  // Нужна база вариантов из variants.js
  if (!window.CRAFT_VARIANTS) return;

  const sliders = document.querySelectorAll(".variant-slider");

  sliders.forEach((img) => {
    const key = img.dataset.variant;
    const images = window.CRAFT_VARIANTS[key];
    if (!images || images.length < 2) return;

    let idx = 0;
    let dots = [];
    let timer = null;
    let paused = false;

    // Куда вешать hover: чтобы пауза работала и на точки тоже
    // Обычно хватает родителя. Если родителя нет (крайний случай), используем img.
    const hoverTarget = img.parentElement || img;

    // Preload, чтобы не мигало
    images.forEach((src) => {
      const i = new Image();
      i.src = src;
    });

    // Создаем точки, если нужно
    if (img.dataset.dots === "true") {
      const dotsWrap = document.createElement("div");
      dotsWrap.className = "variant-dots";

      images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "variant-dot" + (i === 0 ? " active" : "");
        dot.title = `${i + 1}/${images.length}`;

        dot.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          setSlide(i);
        });

        dotsWrap.appendChild(dot);
        dots.push(dot);
      });

      img.after(dotsWrap);

      // Если в hoverTarget не попали точки (например, parent слишком узкий),
      // подстрахуемся: пауза и при наведении на dotsWrap.
      dotsWrap.addEventListener("mouseenter", () => (paused = true));
      dotsWrap.addEventListener("mouseleave", () => (paused = false));
    }

    function setSlide(i) {
      idx = i;

      // Плавное затухание
      img.style.opacity = "0";

      setTimeout(() => {
        img.src = images[idx];
        img.style.opacity = "1";

        // Активная точка
        if (dots.length) {
          dots.forEach((d, di) => d.classList.toggle("active", di === idx));
        }
      }, 200);
    }

    function next() {
      setSlide((idx + 1) % images.length);
    }

    function start() {
      if (timer) return;
      timer = setInterval(() => {
        if (paused) return;
        next();
      }, 5000);
    }

    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    // Пауза при наведении
    hoverTarget.addEventListener("mouseenter", () => (paused = true));
    hoverTarget.addEventListener("mouseleave", () => (paused = false));

    // Если вкладка скрыта, можно экономить (не обязательно, но приятно)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });

    start();
  });
})();
