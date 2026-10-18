const WILAYAS=["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"];
const WILAYAS_AR=["أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة", "بشار", "البليدة", "البويرة", "تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو", "الجزائر العاصمة", "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة", "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران", "البيض", "إليزي", "برج بوعريريج", "بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة", "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت", "غرداية", "غليزان", "تيميمون", "برج باجي مختار", "أولاد جلال", "بني عباس", "عين صالح", "عين قزام", "توقرت", "جانت", "المغير", "المنيعة"];
/* Communes : chargées automatiquement (1 541 communes, noms français + arabes) depuis le jeu de données public
   "geoalgeria". Les 11 nouvelles wilayas de 2026 (59-69) sont rattachées à leur wilaya d'origine (liste à 58). */
const COMMUNES={};
const PARENT={59:3,60:5,61:7,62:12,63:13,64:14,65:17,66:17,67:26,68:28,69:32};
const COMMUNES_CACHE='hind_communes_v1';
function buildCommunes(rows){const by={};
 rows.forEach(r=>{let w=+r.wilaya_code;if(PARENT[w])w=PARENT[w];
  const fr=String(r.commune_name_fr||'').trim();if(!(w>=1&&w<=58)||!fr)return;
  (by[w]=by[w]||[]).push({fr,ar:String(r.commune_name_ar||'').trim()})});
 for(const k in by)by[k].sort((a,b)=>a.fr.localeCompare(b.fr,'fr'));
 return by}
const COMMUNES_READY=(async()=>{
 try{const c=JSON.parse(localStorage.getItem(COMMUNES_CACHE)||'null');if(c&&Object.keys(c).length>50){Object.assign(COMMUNES,c);return}}catch(_){}
 try{const r=await fetch('https://cdn.jsdelivr.net/npm/geoalgeria@1.3.0/data/ecommerce/communes.json');const j=await r.json();
  const by=buildCommunes(Array.isArray(j)?j:(j.communes||[]));
  if(Object.keys(by).length>50){Object.assign(COMMUNES,by);try{localStorage.setItem(COMMUNES_CACHE,JSON.stringify(by))}catch(_){}}
 }catch(_){}
})();
