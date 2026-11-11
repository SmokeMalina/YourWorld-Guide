(() => {
const weapons = window.YW_WEAPON_SERIES.flatMap(series=>series.weapons.map((w,index)=>({
 ...w, damageOptions:Array.isArray(w.damage)?w.damage:null, key:series.id+':'+index, series:series.name,
 damage:Array.isArray(w.damage)?w.damage.map(d=>d.label+': '+Number(d.value).toLocaleString('ru')).join(' / '):w.damage,
 rate:w.hasFireRate===false?'—':w.fireRate || 'Не указана',
 ammoList:(Array.isArray(w.ammo)?w.ammo:[w.ammo]).filter(Boolean),
 mags:w.hasMagazine===false?[]:w.magTypes || [],
 silencer:w.integratedSuppressor || (w.suppressors?.length?w.suppressors.map(s=>typeof s==='string'?s:s.label||s.name).join(', '):w.hasSuppressors===false?'Не поддерживается':'Не указан'),
 suppressors:(w.suppressors||[]).map(s=>typeof s==='string'?{name:s,image:'/images/weapons/suppressor.png'}:{...s,name:s.label||s.name,image:s.image||'/images/weapons/suppressor.png'})
})));
const dialog=document.getElementById('suppressor-dialog');
let modalTrigger=null;
function openSuppressors(weapon,trigger){
 modalTrigger=trigger;
 const suppressors=weapon.suppressors;
 document.getElementById('suppressor-weapon').textContent=weapon.name+' · '+suppressors.length+' вариантов';
 const root=document.getElementById('suppressor-items');root.replaceChildren();
 suppressors.forEach(item=>{const figure=document.createElement('figure');const img=document.createElement('img');img.src=item.image;img.alt=item.name;const caption=document.createElement('figcaption');caption.textContent=item.name;figure.append(img,caption);root.append(figure);});
 dialog.showModal();
}
document.getElementById('close-suppressors').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(modalTrigger?.isConnected)modalTrigger.focus();});
const left=document.getElementById('weapon-left'),right=document.getElementById('weapon-right'),filter=document.getElementById('differences'),add=document.getElementById('add-weapon');
let third=null;
function fill(select,value){
 const groups=new Map();
 weapons.forEach((w,i)=>{if(!groups.has(w.series)){const group=document.createElement('optgroup');group.label=w.series;groups.set(w.series,group);select.append(group);}const option=document.createElement('option');option.value=i;option.textContent=w.name;groups.get(w.series).append(option);});
 select.value=value;select.addEventListener('change',render);
}
const requested=new URLSearchParams(location.search).get('weapon');
const initial=weapons.findIndex(w=>w.key===requested);
fill(left,String(initial>=0?initial:weapons.findIndex(w=>w.name==='SMG Bloody')));
fill(right,String(weapons.findIndex(w=>w.name==='RPD Bloody')));
const fmt=n=>Number(n).toLocaleString('ru');
function render(){
 const selects=third?[left,right,third]:[left,right];
 const selected=selects.map(s=>weapons[s.value]);
 const ids=third?['left','right','third']:['left','right'];
 selected.forEach((w,i)=>{document.getElementById('image-'+ids[i]).innerHTML=`<div class="compare-weapon"><img src="${w.image}" alt="${w.name}"></div><span class="compare-series">Серия ${w.series}</span>`;});
 const rows=[
  {label:'Урон',values:selected.map(w=>w.damage),numeric:selected.every(w=>/^\d+$/.test(w.damage)),unit:'за выстрел'},
  {label:'Скорострельность',values:selected.map(w=>w.rate),numeric:selected.every(w=>/^\d+$/.test(w.rate)),unit:'выстр./мин'},
  {label:'Патрон',values:selected.map(w=>w.ammoList.map(a=>a.label).join(' / '))},
  {label:'Магазины',values:selected.map(w=>w.hasMagazine===false?'—':w.mags.join(' / ') || w.magazine || 'Не указан'),unit:'патронов'},
  {label:'Режимы огня',values:selected.map(w=>w.fireModes || 'Не указаны')},
  {label:'Глушитель',values:selected.map(w=>w.silencer)}
 ];
 const tbody=document.getElementById('comparison');tbody.replaceChildren();
 rows.filter(r=>!filter.checked||new Set(r.values).size>1).forEach(r=>{
 const tr=document.createElement('tr'),th=document.createElement('th');th.scope='row';th.textContent=r.label;tr.append(th);
 const different=new Set(r.values).size>1;
 const max=r.numeric?Math.max(...r.values):null;
 r.values.forEach((value,i)=>{const td=document.createElement('td');
 if(r.label==='Урон' && selected[i].damageOptions){
 selected[i].damageOptions.forEach(d=>{const part=document.createElement('div');part.className='compare-damage-option';const label=document.createElement('span');label.textContent=d.label;const value=document.createElement('strong');value.textContent=fmt(d.value);part.append(label,value);td.append(part);});tr.append(td);return;
 }
 if(r.label==='Патрон'){
 selected[i].ammoList.forEach(ammo=>{const part=document.createElement('div');part.className='compare-ammo-option';const img=document.createElement('img');img.className='compare-ammo';img.src=ammo.image;img.alt='';const label=document.createElement('strong');label.textContent=ammo.label;part.append(img,label);td.append(part);});tr.append(td);return;
 }
 if(r.label==='Глушитель' && !selected[i].integratedSuppressor && selected[i].suppressors.length){
 const button=document.createElement('button');button.type='button';button.className='compare-action compare-suppressor-button';button.textContent='Подходящие глушители';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-label','Подходящие глушители: '+selected[i].name);button.addEventListener('click',()=>openSuppressors(selected[i],button));td.append(button);const count=document.createElement('span');count.className='compare-unit';count.textContent=selected[i].suppressors.length+' вариантов';td.append(count);tr.append(td);return;
 }
 const strong=document.createElement('strong');strong.textContent=/^\d+$/.test(value)?fmt(value):value;if(r.numeric&&different&&Number(value)===max)td.classList.add('compare-higher');td.append(strong);
 if(r.unit){const unit=document.createElement('span');unit.className='compare-unit';unit.textContent=r.unit;td.append(unit);}
 if(r.numeric&&different){const delta=document.createElement('span');delta.className='compare-delta';delta.textContent=Number(value)===max?'Максимум в сравнении':'На '+fmt(max-value)+' меньше максимума';td.append(delta);}
 tr.append(td);});tbody.append(tr);});
 document.getElementById('compare-status').textContent=new Set(selects.map(s=>s.value)).size===1?'Выбрана одна и та же модель — различий нет.':'';
 document.querySelector('.compare-table').classList.toggle('has-three',!!third);
 add.hidden=!!third;
}
add.addEventListener('click',()=>{
 if(third)return;
 const th=document.createElement('th');th.scope='col';th.id='third-column';
 th.innerHTML='<div class="compare-third-label"><label for="weapon-third">Третье оружие</label><button type="button" id="remove-weapon" aria-label="Убрать третье оружие">×</button></div><select id="weapon-third"></select><div id="image-third"></div>';
 document.querySelector('.compare-table thead tr').append(th);
 third=document.getElementById('weapon-third');
 const unused=weapons.findIndex((w,i)=>String(i)!==left.value&&String(i)!==right.value);
 fill(third,String(unused));
 document.getElementById('remove-weapon').addEventListener('click',()=>{th.remove();third=null;render();add.focus();});
 render();third.focus();
});
filter.addEventListener('change',render);render();
})();
