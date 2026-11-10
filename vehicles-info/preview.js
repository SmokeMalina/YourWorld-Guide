(() => {
  const {vehicleGroups, vehicleLibrary} = window.vehicleGuideData;
  const types = {all:'Все типы',jeep:'Джипы',sedan:'Седаны',sport:'Спорткары',truck:'Грузовые',vanilla:'Базовый транспорт'};
  const sources = {all:'Все способы',support:'За пожертвование',battlepass:'Боевой пропуск',crystal:'За кристаллы',dollar:'У Бродяги',trade:'Трейд',auction:'Аукцион'};
  const descriptions = {all:'Все способы получения выбранного типа транспорта.',support:'Транспорт, доступный за пожертвование.',battlepass:'Транспорт, который можно получить с боевого пропуска.',crystal:'Транспорт, который можно купить за кристаллы.',dollar:'Транспорт, который можно купить у Бродяги за доллары.',trade:'Трейдовый транспорт.',auction:'Транспорт, который можно выиграть на аукционе. Аукционная коллекция показана целиком.'};
  const escape = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const models = Object.entries(vehicleGroups).flatMap(([category,entries])=>entries.map((entry,index)=>{
    if(typeof entry==='string') entry={key:entry,title:entry.replaceAll('_',' ')};
    const [prefix,suffix] = category.split('_');
    return {...entry,id:category+'-'+index,type:category==='auk_collection'?'collection':prefix,source:category==='auk_collection'?'auction':category==='vanilla'?'base':suffix||'support',gallery:vehicleLibrary[entry.key]||[]};
  })).filter(m=>m.gallery.length);
  let type='jeep',source='all',query='';
  const indices={};
  const catalog=document.querySelector('#vehicleCatalog');
  const typeHost=document.querySelector('#vehicleTypes');
  const sourceHost=document.querySelector('#vehicleSources');
  const dialog=document.querySelector('#previewImageDialog');
  const arrow = direction => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${direction<0?'M15 5l-7 7 7 7':'M9 5l7 7-7 7'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  function matching(m){return (type==='all'||m.type===type)&&(source==='all'||m.source===source)&&(!query||(m.title+' '+(m.search||'')).toLowerCase().includes(query));}
  function renderFilters(){
    typeHost.innerHTML=Object.entries(types).map(([id,label])=>`<button type="button" data-type="${id}" aria-pressed="${type===id}">${label}<span>${models.filter(m=>id==='all'||m.type===id).length}</span></button>`).join('');
    sourceHost.innerHTML=Object.entries(sources).map(([id,label])=>`<button type="button" data-source="${id}" aria-pressed="${source===id}">${label}</button>`).join('');
    document.querySelector('#sourceDescription').textContent=type==='vanilla'&&source==='all'?'Базовый транспорт из исходного каталога.':descriptions[source];
  }
  function render(){
    renderFilters();
    const filtered=models.filter(matching);
    document.querySelector('#resultTitle').textContent=types[type];
    document.querySelector('#resultCount').textContent=`Моделей: ${filtered.length}`;
    document.querySelector('#vehicleSearchEmpty').hidden=filtered.length>0;
    catalog.innerHTML=filtered.map(m=>{
      const i=indices[m.id]||0;
      return `<article class="transport-card" data-model="${m.id}">
        <div class="transport-card-head"><h3>${escape(m.title)}</h3><span class="transport-source">${escape(sources[m.source]||'Базовый транспорт')}</span></div>
        <div class="transport-image">
          <button class="transport-open" data-open="${m.id}" aria-label="Увеличить ${escape(m.title)}"><img src="${escape(m.gallery[i])}" alt="${escape(m.title)}" loading="lazy"></button>
          ${m.gallery.length>1?`<button class="transport-prev" data-step="-1" aria-label="Предыдущая расцветка">${arrow(-1)}</button><button class="transport-next" data-step="1" aria-label="Следующая расцветка">${arrow(1)}</button><span class="transport-colors">Расцветка <span data-counter>${i+1} / ${m.gallery.length}</span></span>`:''}
        </div>
        <dl class="transport-stats"><div><dt>Вместимость</dt><dd>${escape(m.slots||'Не указана')}</dd></div><div><dt>Макс. скорость</dt><dd>${escape(m.speed||'Не указана')}</dd></div></dl>
        ${(m.attachments||[]).length?`<div class="transport-attachments"><h4>Attach-монты</h4><ul>${m.attachments.map(item=>`<li>${escape(item)}</li>`).join('')}</ul></div>`:''}
        ${m.note?`<p class="transport-note">${escape(m.note)}</p>`:''}
      </article>`;
    }).join('');
  }
  typeHost.addEventListener('click',e=>{const b=e.target.closest('[data-type]');if(!b)return;type=b.dataset.type;if(source==='auction'||type==='vanilla')source='all';render();});
  sourceHost.addEventListener('click',e=>{const b=e.target.closest('[data-source]');if(!b)return;source=b.dataset.source;if(source==='auction'||type==='vanilla')type='all';render();});
  document.querySelector('#vehicleSearch').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();render();});
  document.querySelector('#resetFilters').addEventListener('click',()=>{type='all';source='all';query='';document.querySelector('#vehicleSearch').value='';render();});
  catalog.addEventListener('click',e=>{
    const card=e.target.closest('[data-model]');if(!card)return;
    const model=models.find(m=>m.id===card.dataset.model);
    const step=e.target.closest('[data-step]');
    if(step){indices[model.id]=((indices[model.id]||0)+Number(step.dataset.step)+model.gallery.length)%model.gallery.length;card.querySelector('img').src=model.gallery[indices[model.id]];card.querySelector('[data-counter]').textContent=`${indices[model.id]+1} / ${model.gallery.length}`;}
    if(e.target.closest('[data-open]')){dialog.querySelector('img').src=model.gallery[indices[model.id]||0];dialog.querySelector('img').alt=model.title;dialog.showModal();}
  });
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  render();
})();
