var mymap = L.map('mapid').setView([38.65, -90.35], 13);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 11,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);

var marker1 = L.marker([38.617754745985835, -90.27351197542957]).addTo(mymap);
marker1.bindPopup("<b>Charlie Gitto's</b><br>5226 Shaw Ave, St. Louis, MO 63110").openPopup();

var marker2 = L.marker([38.6207805945034, -90.52424499768973]).addTo(mymap);
marker2.bindPopup("<b>Circle 7 Range</b><br>14412 Clayton Rd, Ballwin, MO 63011").openPopup();

var marker3 = L.marker([38.54918280741555, -90.2622168710806]).addTo(mymap);
marker3.bindPopup("<b>Stacked STL</b><br>7637 Ivory Ave, St. Louis, MO 63111").openPopup();

var marker4 = L.marker([38.656348441388324, -90.30510158150572]).addTo(mymap);
marker4.bindPopup("<b>Salt and Smoke</b><br>6525 Delmar Blvd, St. Louis, MO 63130").openPopup();

var marker5 = L.marker([38.59272125093099, -90.21835211526104]).addTo(mymap);
marker5.bindPopup("<b>Mac's Local Eats</b><br>1821 Cherokee St, St. Louis, MO 63118").openPopup();
