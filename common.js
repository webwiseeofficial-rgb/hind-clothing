const sb=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
const $=id=>document.getElementById(id);
const fmt=n=>Number(n).toLocaleString('fr-FR')+" DA";
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CATS={pyjamas:'Pyjamas',hiver:'Vêtements d’hiver',ete:'Vêtements d’été',soldes:'Soldes'};
const imgs=p=>p.images&&p.images.length?p.images:(p.image_url?[p.image_url]:[]);
function card(p){const i=imgs(p)[0],off=p.old_price>p.price?Math.round(100-p.price*100/p.old_price):0;
return `<a class="card" href="product.html?id=${p.id}"><div class="im">${i?`<img loading="lazy" src="${esc(i)}" alt="${esc(p.name)}">`:'<div class="ph">Hind</div>'}${off?`<b class="tag">-${off}%</b>`:''}</div><div class="ci"><h3>${esc(p.name)}</h3><div class="pr">${fmt(p.price)}${off?` <s>${fmt(p.old_price)}</s>`:''}</div><span class="cta">Commander</span></div></a>`}
if($('hdr'))$('hdr').innerHTML=`<div class="bar">Livraison dans les 58 wilayas · Paiement à la livraison</div><header><a class="logo" href="index.html">Hind Clothing</a><nav><a href="index.html">Accueil</a><a href="shop.html?cat=pyjamas">Pyjamas</a><a href="shop.html?cat=hiver">Hiver</a><a href="shop.html?cat=ete">Été</a><a href="shop.html?cat=soldes" class="sale">Soldes</a><a href="contact.html">Contact</a></nav></header>`;
if($('ftr'))$('ftr').innerHTML=`<footer><div class="logo" style="font-size:1.6rem;margin-bottom:10px">Hind Clothing</div><div><a href="shop.html">Boutique</a><a href="contact.html">Contact</a></div><p style="margin:14px 0 0;opacity:.7">© 2026 Hind Clothing</p></footer>`;
