(function () {
  if (!window.CRAFT_VARIANTS) return;

  const sliders = document.querySelectorAll(".variant-slider");

  sliders.forEach(img => {
    const key = img.dataset.variant;
    const images = window.CRAFT_VARIANTS[key];
    if (!images || images.length < 2) return;

    let idx = 0;
    let dots = [];

    // preload
    images.forEach(src => { const i = new Image(); i.src = src; });

    // точки (если нужно)
    if (img.dataset.dots === "true") {
      const dotsWrap = document.createElement("div");
      dotsWrap.className = "variant-dots";

      images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "variant-dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => setSlide(i));
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });

      img.after(dotsWrap);
    }

    function setSlide(i) {
      idx = i;
      img.style.opacity = "0";

      setTimeout(() => {
        img.src = images[idx];
        img.style.opacity = "1";
        dots.forEach((d, di) =>
          d.classList.toggle("active", di === idx)
        );
      }, 200);
    }

    setInterval(() => {
      setSlide((idx + 1) % images.length);
    }, 5000);
  });
})();
