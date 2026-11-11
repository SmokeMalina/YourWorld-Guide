import {readFile,readdir,access} from 'node:fs/promises';
import path from 'node:path';
const manifest=JSON.parse(await readFile('scripts/live-design-manifest.json','utf8'));
const errors=[];
for(const [file,markers] of Object.entries(manifest)){
 const source=await readFile(file,'utf8');
 for(const marker of markers)if(!source.includes(marker))errors.push(`${file}: missing ${marker}`);
}
let checked=0;
async function scan(dir){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  if(['.git','node_modules','backups','pagefind'].includes(entry.name))continue;
  const file=path.join(dir,entry.name);
  if(entry.isDirectory()){await scan(file);continue;}
  if(!entry.name.endsWith('.html')||/preview|index-glass|index-classic|Mod Preset/.test(entry.name))continue;
  const source=await readFile(file,'utf8');if(!source.includes('<body'))continue;checked++;
  if(!/<body[^>]*class=["'][^"']*\bsite-glass\b/.test(source)||!source.includes('/styles/glass-site.css'))errors.push(`${file}: missing shared glass theme`);
  for(const match of source.matchAll(/(?:href|src)=["']([^"']+)["']/g)){
   const url=match[1];if(!url.startsWith('/')||url.startsWith('//')||url.includes('${'))continue;
   const target=url.split(/[?#]/)[0];
   if(/preview|index-glass/.test(target))errors.push(`${file}: preview dependency ${target}`);
   if(/\.(css|js)$/.test(target)){try{await access('.'+target);}catch{errors.push(`${file}: missing ${target}`);}}
  }
 }
}
await scan('.');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Live design check passed: ${checked} pages, ${Object.keys(manifest).length} approved layouts.`);
