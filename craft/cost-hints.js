(() => {
  const normalize = value => value.trim().toLocaleLowerCase('ru').replace(/ё/g, 'е').replace(/\s+/g, ' ');
  const prices = new Map(Object.entries(window.RESOURCE_COSTS || {}).map(([name, cost]) => [normalize(name), cost]));
  const tip = document.createElement('div');
  tip.id = 'craft-cost-tooltip';
  tip.className = 'craft-cost-tooltip';
  tip.setAttribute('role', 'tooltip');
  tip.hidden = true;
  document.body.append(tip);
  let active = null;
  let hideTimer;
  function hide() {
    clearTimeout(hideTimer);
    if (active) active.row.removeAttribute('aria-describedby');
    active = null;
    tip.hidden = true;
  }
  function position() {
    if (!active) return;
    const rect = active.row.getBoundingClientRect();
    const box = tip.getBoundingClientRect();
    tip.style.left = Math.max(12, Math.min(innerWidth - box.width - 12, rect.left + (rect.width - box.width) / 2)) + 'px';
    const top = rect.top - box.height - 10;
    tip.style.top = (top >= 12 ? top : Math.min(innerHeight - box.height - 12, rect.bottom + 10)) + 'px';
  }
  function show(entry) {
    clearTimeout(hideTimer);
    if (active && active !== entry) active.row.removeAttribute('aria-describedby');
    active = entry;
    tip.replaceChildren();
    const label = document.createElement('span');
    label.className = 'craft-cost-tooltip__label';
    label.textContent = 'Крафт из скрапа';
    const title = document.createElement('strong');
    title.textContent = entry.name;
    const value = document.createElement('div');
    value.className = 'craft-cost-tooltip__value';
    const icon = document.createElement('img');
    icon.src = '/images/items/scrap.png';
    icon.alt = '';
    const amount = document.createElement('span');
    amount.textContent = entry.cost.toLocaleString('ru') + ' скрапа за 1 шт.';
    value.append(icon, amount);
    tip.append(label, title, value);
    if (entry.count > 1) {
      const total = document.createElement('p');
      total.textContent = 'На рецепт: ' + entry.count + ' × ' + entry.cost + ' = ' + (entry.count * entry.cost).toLocaleString('ru') + ' скрапа';
      tip.append(total);
    }
    tip.hidden = false;
    entry.row.setAttribute('aria-describedby', tip.id);
    position();
  }
  const delayedHide = () => { hideTimer = setTimeout(hide, 150); };
  document.querySelectorAll('.item-list .item-row').forEach(row => {
    const name = row.querySelector(':scope > span')?.textContent.trim();
    if (!name) return;
    const cost = prices.get(normalize(name));
    if (!Number.isFinite(cost) || cost < 0) return;
    const countText = row.querySelector(':scope > b')?.textContent.trim() || '';
    const match = countText.match(/^[xх×]\s*(\d+)$/i);
    const count = match ? Number(match[1]) : 1;
    row.classList.add('has-craft-cost');
    row.tabIndex = 0;
    row.setAttribute('role', 'button');
    row.setAttribute('aria-label', name + ', количество ' + count + '. Показать стоимость крафта');
    const entry = {row, name, cost, count};
    row.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') show(entry); });
    row.addEventListener('pointerleave', delayedHide);
    row.addEventListener('focus', () => show(entry));
    row.addEventListener('blur', delayedHide);
    row.addEventListener('click', () => show(entry));
    row.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        show(entry);
      }
    });
  });
  tip.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  tip.addEventListener('pointerleave', delayedHide);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  document.addEventListener('pointerdown', event => {
    if (active && !active.row.contains(event.target) && !tip.contains(event.target)) hide();
  });
  window.addEventListener('scroll', hide, {passive: true});
  window.addEventListener('resize', hide);
})();
