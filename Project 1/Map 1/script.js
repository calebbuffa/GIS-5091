var map = L.map('map').setView([46.2276, 2.2137], 6);

var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

var tstyle = {
    "color": "#ff0000",
  "radius": 3,
    "weight": 1,
    "opacity": 1,
  "fillOpacity": 1
};

L.geoJSON("terrorism.geojson", {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, tstyle);
    }
}).addTo(map);

