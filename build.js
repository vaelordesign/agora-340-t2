// Assemble les morceaux de parts/ en une seule page autonome.
//  - agora-340-t2.html : fragment (sans <html>/<head>/<body>) pour l'Artifact et l'ouverture locale
//  - docs/index.html : page complète pour GitHub Pages (noindex : pas pour Google)
// Vérifie aussi la banque de questions (parts/bank/*.json + DEVS de d-core.js).
const fs=require('fs'),p=require('path');
const P=x=>fs.readFileSync(p.join(__dirname,'parts',x),'utf8');

// ---------------- banque
const bankDir=p.join(__dirname,'parts','bank');
let bank=[];
fs.readdirSync(bankDir).filter(f=>/^bank-.*\.json$/.test(f)).sort().forEach(f=>{
  const arr=JSON.parse(fs.readFileSync(p.join(bankDir,f),'utf8'));
  bank=bank.concat(arr);
});
const core=P('d-core.js');
const DEVS=new Function(core+'\nreturn DEVS;')();
const all=bank.concat(DEVS);
const fiches=Array.from({length:16},(_,i)=>'s'+(i+1));
const errs=[], seen={};
all.forEach(q=>{
  const tag=q.id||'(sans id)';
  if(seen[q.id]) errs.push(tag+' : id en double'); seen[q.id]=1;
  if(fiches.indexOf(q.s)<0) errs.push(tag+' : fiche inconnue '+q.s);
  if(!q.q) errs.push(tag+' : énoncé vide');
  if(q.t==='qcm'){ if(!Array.isArray(q.o)||q.o.length!==4) errs.push(tag+' : il faut 4 options'); if(!(q.a>=0&&q.a<=3)) errs.push(tag+' : index de réponse invalide'); if(!q.w) errs.push(tag+' : explication manquante'); }
  else if(q.t==='vf'){ if(typeof q.a!=='boolean') errs.push(tag+' : a doit être true ou false'); if(!q.w) errs.push(tag+' : explication manquante'); }
  else if(q.t==='courte'){ if(!q.m) errs.push(tag+' : réponse modèle manquante'); if(!Array.isArray(q.k)||!q.k.length) errs.push(tag+' : mots-clés manquants'); }
  else if(q.t==='dev'){ if(!q.m) errs.push(tag+' : plan modèle manquant'); }
  else errs.push(tag+' : type inconnu '+q.t);
  if(/[—–]/.test(JSON.stringify(q))) errs.push(tag+' : tiret long');
});
if(errs.length){ console.error(errs.join('\n')); process.exit(1); }
const count={}; all.forEach(q=>{ count[q.t]=(count[q.t]||0)+1; });
const perFiche=fiches.map(s=>s+':'+all.filter(q=>q.s===s).length).join(' ');

// ---------------- page
const bankJs='const BANK = '+JSON.stringify(bank).split('</').join('<\\/')+'.concat(DEVS);\n';
const head=P('a-head.html').split('<title>Agora 340</title>').join('<title>Agora 340 · Test 2</title>').replace('</style>', ()=>P('a-extra.css')+'</style>');
const body=[P('f-express.html'),P('b1-fiches.html'),P('b2-fiches.html'),P('c-views.html'),'<script>',core,bankJs,P('e-app.js'),'</script>',''].join('\n');
fs.writeFileSync(p.join(__dirname,'agora-340-t2.html'),head+'\n'+body);
fs.mkdirSync(p.join(__dirname,'docs'),{recursive:true});
const extra='<meta name="robots" content="noindex">\n<meta name="theme-color" content="#24508E">\n';
const full='<!doctype html>\n<html lang="fr">\n<head>\n'+extra+head+'\n</head>\n<body>\n'+body+'</body>\n</html>\n';
fs.writeFileSync(p.join(__dirname,'docs','index.html'),full);
// copie hors ligne pour Julien, à côté des PDF du cours
const copie=p.join(__dirname,'..','..','Grasset Session 1','Philo 2','Agora-340-Test-2.html');
try{ fs.writeFileSync(copie,full); }catch(e){ console.warn('copie hors ligne non écrite :',e.message); }
console.log('Banque :',all.length,'questions',JSON.stringify(count));
console.log('Par fiche :',perFiche);
console.log('agora-340-t2.html :',((head.length+body.length)/1024).toFixed(0),'Ko ; docs/index.html et la copie hors ligne écrits');
