// ponytail: base64 haelt nur naive Harvester ab. Crawler, die JS ausfuehren,
// lesen Nummer und Adresse trotzdem. Mehr Schutz nur ueber Kontaktformular.
document.querySelectorAll('a[data-tel], a[data-mail]').forEach(function (a) {
  var tel = a.dataset.tel, v = atob(tel || a.dataset.mail);
  a.href = tel ? 'tel:' + v.replace(/\s/g, '') : 'mailto:' + v;
  a.textContent = v;
});
