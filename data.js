const WILAYAS=["Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara","Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa","Relizane","Timimoun","Bordj Badji Mokhtar","Ouled Djellal","Béni Abbès","In Salah","In Guezzam","Touggourt","Djanet","El M'Ghair","El Meniaa"];

/* COMMUNES: clé = numéro de wilaya (1-58). Liste de départ (principales communes).
   Remplacez/complétez avec le jeu de données complet (1541 communes) au même format. */
const COMMUNES={
1:["Adrar","Reggane","Aoulef"],2:["Chlef","Ténès","Boukadir"],3:["Laghouat","Aflou","Ksar El Hirane"],
4:["Oum El Bouaghi","Aïn Beïda","Aïn M'lila"],5:["Batna","Barika","Arris"],6:["Béjaïa","Akbou","El Kseur"],
7:["Biskra","Tolga","Sidi Okba"],8:["Béchar","Kenadsa","Abadla"],9:["Blida","Boufarik","Mouzaïa"],
10:["Bouira","Lakhdaria","Sour El Ghozlane"],11:["Tamanrasset","Abalessa","In Guezzam"],12:["Tébessa","Cheria","Bir El Ater"],
13:["Tlemcen","Maghnia","Remchi"],14:["Tiaret","Frenda","Sougueur"],15:["Tizi Ouzou","Azazga","Draâ Ben Khedda"],
16:["Alger Centre","Bab Ezzouar","Hussein Dey","El Harrach","Dar El Beïda","Kouba","Bir Mourad Raïs","Birtouta"],
17:["Djelfa","Messaad","Aïn Oussara"],18:["Jijel","El Milia","Taher"],19:["Sétif","El Eulma","Aïn Oulmène"],
20:["Saïda","Aïn El Hadjar"],21:["Skikda","Azzaba","Collo"],22:["Sidi Bel Abbès","Telagh","Sfisef"],
23:["Annaba","El Bouni","El Hadjar"],24:["Guelma","Oued Zenati","Héliopolis"],25:["Constantine","El Khroub","Aïn Smara"],
26:["Médéa","Berrouaghia","Ksar El Boukhari"],27:["Mostaganem","Aïn Tedeles","Sidi Ali"],28:["M'Sila","Bou Saâda","Sidi Aïssa"],
29:["Mascara","Sig","Mohammadia"],30:["Ouargla","Hassi Messaoud","Rouissat"],31:["Oran","Bir El Djir","Es Senia","Aïn El Turck","Arzew"],
32:["El Bayadh","Bougtoub"],33:["Illizi","In Amenas"],34:["Bordj Bou Arréridj","Ras El Oued","Mansoura"],
35:["Boumerdès","Bordj Menaïel","Khemis El Khechna"],36:["El Tarf","El Kala","Bouteldja"],37:["Tindouf"],
38:["Tissemsilt","Theniet El Had"],39:["El Oued","Guemar","Robbah"],40:["Khenchela","Kais"],
41:["Souk Ahras","Sedrata"],42:["Tipaza","Koléa","Cherchell"],43:["Mila","Chelghoum Laïd","Ferdjioua"],
44:["Aïn Defla","Khemis Miliana","Miliana"],45:["Naâma","Mécheria","Aïn Sefra"],46:["Aïn Témouchent","Hammam Bouhadjar"],
47:["Ghardaïa","Metlili","Berriane"],48:["Relizane","Oued Rhiou","Mazouna"],49:["Timimoun"],50:["Bordj Badji Mokhtar"],
51:["Ouled Djellal","Sidi Khaled"],52:["Béni Abbès"],53:["In Salah"],54:["In Guezzam"],55:["Touggourt","Tamacine"],
56:["Djanet"],57:["El M'Ghair"],58:["El Meniaa"]
};

