/* Heritage Protection Service - common page parts and the State Register */
(function(){
var UI={
 en:{t1:'Office of the Governor of Irad',t2:'Heritage Protection Service',t3:'State Register of Monuments of History and Culture',
  home:'Home',reg:'State Register',wh:'World Heritage',permits:'Permits and finds',about:'About the Service',
  att:'Attention!',tick:'Kara-Suu Canyon mouth: excavation site closed to visitors, no photography (permit No. 07/2026)  ·  Rabat-i-Safed winter hours from 1 November: 10:00-16:00  ·  Finds of church property made before 1992 must be declared within ten days  ·  Drones prohibited over Cathedral Hill, Iyık Janyl',
  links:'Links',visitors:'Visitors',upd:'Last update',contacts:'Contacts',
  foot:'© 2009-2026 Heritage Protection Service of Irad. Materials may be used with reference to the Service. Photographs: Heritage Protection Service, Irad Wiki Commons.',best:'Best viewed at 1024×768 in Internet Explorer 7 or later.'},
 ir:{t1:'Irad Gubernatorunun Keñsesi',t2:'Murastı Korgoo Kızmatı',t3:'Tarıhıy jana Madaniy Estelikterdin Mamlekettik Reestri',
  home:'Bashkı bet',reg:'Mamlekettik reestr',wh:'Düynölük muras',permits:'Uruksattar jana tabılgalar',about:'Kızmat jönündö',att:'Kölüñüzdü buruñuz!',
  links:'Shiltemeler',months:['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentyabr','oktyabr','noyabr','dekabr'],visitors:'Kelüüchülör',upd:'Akırkı jañılanuu',contacts:'Bailanısh'},
 ru:{t1:'Канцелярия Губернатора Ирада',t2:'Служба охраны наследия',t3:'Государственный реестр памятников истории и культуры',
  home:'Главная',reg:'Госреестр',wh:'Всемирное наследие',permits:'Разрешения и находки',about:'О Службе',att:'Внимание!',
  links:'Ссылки',months:['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],visitors:'Посетители',upd:'Последнее обновление',contacts:'Контакты'}
};
var lang='en';
try{lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('hps_lang')||'en';}catch(e){}
if(!UI[lang])lang='en';
function u(k){return (UI[lang]&&UI[lang][k])||UI.en[k];}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
window.HPS={u:u,esc:esc,lang:lang};

var page=document.body.getAttribute('data-page');
function top(){
 var l=['en','ir','ru'].map(function(x){return '<a href="#" data-l="'+x+'"'+(x===lang?' class="on"':'')+'>'+{en:'English',ir:'Iradça',ru:'Русский'}[x]+'</a>';}).join('');
 var m=[['/','home'],['/register.html','reg'],['/register.html?grade=W','wh'],['/permits.html','permits'],['/about.html','about']];
 document.getElementById('top').innerHTML='<div id="lang">'+l+'</div><div class="in"><a href="/"><img class="mark" src="/assets/hps-mark.svg" alt="Heritage Protection Service"></a><div><div class="t1">'+esc(u('t1'))+'</div><div class="t2">'+esc(u('t2'))+'</div><div class="t3">'+esc(u('t3'))+'</div></div><img class="emb" src="/assets/state-emblem-160.png" alt="State Emblem of Irad"></div>'+
  '<div id="menu">'+m.map(function(x){var on=(page===x[1]||(page==='mon'&&x[1]==='reg'))&&!(x[1]==='reg'&&/grade=W/.test(location.search));if(x[1]==='wh'&&/grade=W/.test(location.search))on=true;return '<a href="'+x[0]+'"'+(on?' class="on"':'')+'>'+esc(u(x[1]))+'</a>';}).join('')+'</div>'+
  '<div id="ticker"><b>'+esc(u('att'))+'</b> <marquee scrollamount="3">'+esc(UI.en.tick)+'</marquee></div>';
 [].forEach.call(document.querySelectorAll('#lang a'),function(a){a.onclick=function(e){e.preventDefault();try{localStorage.setItem('hps_lang',a.getAttribute('data-l'));}catch(x){}location.reload();};});
}
function counter(){
 var d0=Date.UTC(2009,2,2),days=Math.floor((Date.now()-d0)/864e5);
 return String(148211+days*37+Math.floor((Date.now()%864e5)/3.6e6)*2).padStart(7,'0');
}
/* the Service's pages: leadership, contacts, news, documents, vacancies, questions */
var I=window.SITE_I18N||{ui:{},pages:{}};
function ku(k){var L=(I.ui&&I.ui[lang])||{},E=(I.ui&&I.ui.en)||{};return L[k]||E[k]||'';}
var SVC=[['leadership','/leadership.html'],['contacts','/contacts.html'],['news','/news.html'],['documents','/documents.html'],['vacancies','/vacancies.html'],['faq','/faq.html']];
function svcBox(){
 if(!ku('kit_nav'))return '';
 return '<div class="box"><h4>'+esc(ku('kit_nav'))+'</h4><div><ul>'+SVC.map(function(x){return '<li><a href="'+x[1]+'">'+esc(ku('kit_nav_'+x[0]))+'</a></li>';}).join('')+'</ul></div></div>';
}
function side(){
 var s=document.getElementById('side');if(!s)return;
 s.innerHTML='<div class="box"><h4>'+esc(u('reg'))+'</h4><div><ul><li><a href="/register.html?grade=W">World Heritage (4)</a></li><li><a href="/register.html?grade=N">National importance</a></li><li><a href="/register.html?grade=L">Local importance</a></li><li><a href="/register.html?grade=P">Provisional protection</a></li></ul></div></div>'+
 svcBox()+
 '<div class="box"><h4>'+esc(u('links'))+'</h4><div><ul><li><a href="https://iradgov.org/">Office of the Governor</a></li><li><a href="https://archives.iradgov.org/">State Archives</a></li><li><a href="https://saintjanyl.org/">Church of St. Janyl</a></li><li><a href="https://maps.attelkom.net/">Attelkom Maps</a></li></ul></div></div>'+
 '<div class="box"><h4>'+esc(u('contacts'))+'</h4><div>14 Köhne Diz Street, Talas<br>Tel. +996-39-3-22-41-17<br>Fax +996-39-3-22-41-19<br><a href="mailto:hps@iradgov.org">hps@iradgov.org</a><br>Mon-Fri 9:00-17:00, lunch 13:00-14:00</div></div>'+
 '<div class="box"><h4>'+esc(u('visitors'))+'</h4><div><span class="cnt">'+counter()+'</span><br><span class="small">'+esc(u('upd'))+': 01.11.2026</span></div></div>';
}
function foot(){
 var f=document.getElementById('foot');if(f)f.innerHTML=esc(u('foot'))+'<br>'+esc(u('best'))+' · <a href="/contacts.html">Webmaster</a>';
}
top();side();foot();kitText();

/* page text in the reader's language (pages with data-i18n) */
function pad(n){return (n<10?'0':'')+n;}
function fdate(d){
 var p=d.split('-'),M=UI[lang].months;
 if(!M||!M.length)return d;
 return lang==='ir'?(+p[2])+'-'+M[+p[1]-1]+' '+p[0]:(+p[2])+' '+M[+p[1]-1]+' '+p[0];
}
function kitText(){
 var all=function(q){return [].slice.call(document.querySelectorAll(q));};
 if(lang!=='en'){
  var P=(I.pages&&I.pages[lang])||{},L=(I.ui&&I.ui[lang])||{};
  all('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(P[k]!=null)el.innerHTML=P[k];else if(L[k]!=null)el.textContent=L[k];});
  all('[data-date]').forEach(function(el){el.textContent=fdate(el.getAttribute('data-date'));});
  var tk=document.body.getAttribute('data-title');
  if(tk&&P['title_'+tk])document.title=P['title_'+tk]+' | '+u('t2');
  document.documentElement.lang=lang==='ir'?'ky':'ru';
 }
 /* competitions past their closing date (Talas time) */
 var n=new Date(Date.now()+6*36e5),today=n.getUTCFullYear()+'-'+pad(n.getUTCMonth()+1)+'-'+pad(n.getUTCDate());
 all('[data-closes]').forEach(function(v){
  if(v.getAttribute('data-closes')<today&&!v.querySelector('.kit-cl')){
   v.classList.add('is-closed');
   var h=v.querySelector('header');if(h)h.insertAdjacentHTML('beforeend',' <span class="nophoto kit-cl">'+esc(ku('kit_isclosed'))+'</span>');
  }
 });
}

/* ---- register ---- */
var GR={W:'World Heritage',N:'National importance',L:'Local importance',P:'Provisional protection'};
function grade(g){return '<span class="grade g-'+g+'" title="'+esc(GR[g])+'">'+(g==='W'?'WH':g)+'</span>';}
function photoMark(m){return m.photo==='no'?'<span class="nophoto">No photography</span>':'<span class="okphoto">Private photography allowed</span>';}
function load(cb){fetch('/data/register.json').then(function(r){return r.json();}).then(cb).catch(function(){var e=document.getElementById('reg');if(e)e.innerHTML='<p>The Register is temporarily unavailable. Please try later.</p>';});}

if(page==='reg'){
 load(function(d){
  var q=new URLSearchParams(location.search),g=q.get('grade')||'',dist=q.get('district')||'',t=q.get('q')||'';
  var dists=[];d.monuments.forEach(function(m){m.district.split(/; | and /).forEach(function(x){x=x.replace(/ Districts?$/,'').trim();if(dists.indexOf(x)<0)dists.push(x);});});
  dists.sort();
  var f=document.getElementById('filters');
  f.innerHTML='<form>Category: <select name="grade"><option value="">all</option>'+Object.keys(GR).map(function(k){return '<option value="'+k+'"'+(k===g?' selected':'')+'>'+GR[k]+'</option>';}).join('')+'</select> District: <select name="district"><option value="">all</option>'+dists.map(function(x){return '<option'+(x===dist?' selected':'')+'>'+esc(x)+'</option>';}).join('')+'</select> Name: <input name="q" size="14" value="'+esc(t)+'"> <input type="submit" value="Search"></form>';
  var rows=d.monuments.filter(function(m){return (!g||m.grade===g)&&(!dist||m.district.indexOf(dist)>=0)&&(!t||(m.name+' '+m.name_ru+' '+m.place).toLowerCase().indexOf(t.toLowerCase())>=0);});
  document.getElementById('reg').innerHTML='<p class="small">Found: '+rows.length+' of '+d.monuments.length+' entries published online. Register as of '+d.updated.split('-').reverse().join('.')+'.</p><table class="reg"><tr><th>Prot. No.</th><th>Monument</th><th>Cat.</th><th class="hm">District</th><th class="hm">Entered</th><th>Photography</th></tr>'+
   rows.map(function(m){return '<tr><td class="no">'+m.no+'</td><td><a href="/monument.html?id='+m.id+'">'+esc(m.name)+'</a><br><span class="small">'+esc(m.name_ru)+'</span></td><td>'+grade(m.grade)+'</td><td class="hm">'+esc(m.district)+'</td><td class="hm">'+esc(m.entered.split(/[ ;(]/)[0])+'</td><td>'+photoMark(m)+'</td></tr>';}).join('')+'</table><p class="small">'+esc(d.unlisted)+'</p>';
 });
}
if(page==='mon'){
 load(function(d){
  var id=new URLSearchParams(location.search).get('id'),m=d.monuments.filter(function(x){return x.id===id;})[0],el=document.getElementById('mon');
  if(!m){el.innerHTML='<h1>Entry not found</h1><p>No entry with this number is published. <a href="/register.html">Back to the Register</a>.</p>';return;}
  document.title=m.name+' - State Register - Heritage Protection Service';
  var img=m.img?'<figure><img src="'+m.img+'" alt="'+esc(m.name)+'" loading="lazy"><figcaption>'+esc(m.name)+'. Photo: Irad Wiki Commons</figcaption></figure>':m.noimg?'<div class="noimg">'+esc(m.noimg)+'</div>':'';
  var img2=m.img2?'<figure><img src="'+m.img2+'" alt="" loading="lazy"><figcaption>Photo: Irad Wiki Commons</figcaption></figure>':'';
  el.innerHTML='<div class="crumbs"><a href="/">Home</a> » <a href="/register.html">State Register</a> » '+m.no+'</div><h1>'+esc(m.name)+'</h1><p class="small">'+esc(m.name_ru)+'</p>'+
   '<div class="two"><div>'+img+'</div><div><table class="card">'+
   '<tr><th>Protection No.</th><td class="no"><b>'+m.no+'</b> '+grade(m.grade)+'</td></tr>'+
   '<tr><th>Category</th><td>'+esc(GR[m.grade])+'</td></tr>'+
   '<tr><th>Type</th><td>'+esc(m.type)+'</td></tr>'+
   '<tr><th>Date</th><td>'+esc(m.date)+'</td></tr>'+
   '<tr><th>District</th><td>'+esc(m.district)+'</td></tr>'+
   '<tr><th>Location</th><td>'+esc(m.place)+(m.map?' (<a href="https://maps.attelkom.net/?p='+m.map+'">Attelkom Maps</a>)':'')+'</td></tr>'+
   '<tr><th>Entered in the Register</th><td>'+esc(m.entered)+'</td></tr>'+
   (m.wh?'<tr><th>World Heritage</th><td>'+esc(m.wh)+'</td></tr>':'')+
   '<tr><th>Owner / user</th><td>'+esc(m.holder)+'</td></tr>'+
   '<tr><th>Protection zone</th><td>'+esc(m.zone)+'</td></tr>'+
   '<tr><th>Photography</th><td>'+photoMark(m)+'</td></tr>'+(m.visit?'<tr><th>Visiting</th><td><a href="'+m.visit+'">Visit Irad: opening and access</a></td></tr>':'')+'</table></div></div>'+
   '<h2>Description</h2><p>'+esc(m.desc)+'</p>'+img2+
   '<div class="notice"><b class="h">HPS notice to visitors</b>'+esc(m.notice)+'<ul>'+m.rules.map(function(r){return '<li>'+esc(r)+'</li>';}).join('')+'</ul>'+(m.link?'<a href="'+m.link.href+'">'+esc(m.link.text)+'</a>':'')+'</div>'+
   '<p class="small">Under the heritage ordinance of 1997 (am. 2010), damage to a registered monument, unauthorised digging, and the removal of finds are offences. Report damage to the Service: +996-39-3-22-41-17.</p>';
 });
}
})();
