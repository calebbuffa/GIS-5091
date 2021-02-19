var map = L.map('map').setView([46.2276, 2.2137], 6);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var tstyle = {
    "color": "#ff0000",
  "radius": 3,
    "weight": 1,
    "opacity": 1,
  "fillOpacity": 1
};

$.getJSON("https://raw.githubusercontent.com/calebbuffa/GIS-5091/main/Project%201/terrorism.geojson", function(response) {
            console.log("response", response);
            var terrorism = new L.GeoJSON(response, {
              pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, tstyle);
              }
            }
                                         );
            terrorism.addTo(map); });  

var nstyle = {
    radius: 1,
    fillColor: "#4dff00",
    color: "#4dff00",
    weight: 1,
    opacity: 1,
    fillOpacity: .1
};

$.getJSON("https://raw.githubusercontent.com/calebbuffa/GIS-5091/main/Project%201/fr_night_light.geojson", function(response) {
            console.log("response", response);
            var nlight = new L.GeoJSON(response, {
              style: nstyle
            }
                                         );
            nlight.addTo(map); }); 

var rstyle = {
    radius: .5,
    fillColor: "#000000",
    color: "#000000",
    weight: .5,
    opacity: .3,
    fillOpacity: .3
};

$.getJSON("https://raw.githubusercontent.com/calebbuffa/GIS-5091/main/Project%201/FRA_roads.geojson", function(response) {
            console.log("response", response);
            var road = new L.GeoJSON(response, {
              style: rstyle
            }
                                         );
            road.addTo(map); }); 
