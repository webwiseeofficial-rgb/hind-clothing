function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Date','Produit','Quantité','Nom','Téléphone','Wilaya','Commune','Livraison','Frais livraison','Total']);
  }
  sh.appendRow([new Date(), d.product_name, d.quantity, d.customer_name, '', d.wilaya, d.commune, d.delivery_type, d.delivery_price, d.total]);
  sh.getRange(sh.getLastRow(), 5).setNumberFormat('@').setValue(d.phone);
  MailApp.sendEmail('bounoua.hindd@gmail.com', 'Nouvelle commande : ' + d.product_name,
    d.customer_name + ' - ' + d.phone + '\n' + d.wilaya + ', ' + d.commune + ' (' + d.delivery_type + ')\n' +
    d.product_name + ' x ' + d.quantity + '\nTotal : ' + d.total + ' DA');
  return ContentService.createTextOutput('ok');
}
