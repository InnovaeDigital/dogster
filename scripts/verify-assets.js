const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const files=[path.join(root,'index.html'),path.join(root,'style.css')];
const refs=[];
for(const file of files){
 const text=fs.readFileSync(file,'utf8');
 for(const m of text.matchAll(/(?:src|href)=["']([^"']+)["']/g)) if(m[1].startsWith('assets/')) refs.push(m[1]);
 for(const m of text.matchAll(/url\(["']?(assets\/[^"')]+)["']?\)/g)) refs.push(m[1]);
}
const unique=[...new Set(refs)], missing=unique.filter(r=>!fs.existsSync(path.join(root,r)));
if(missing.length){console.error('Assets ausentes:\n'+missing.map(x=>' - '+x).join('\n'));process.exit(1)}
console.log(`OK: ${unique.length} referências de assets verificadas.`);
