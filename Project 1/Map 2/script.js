var map = L.map('map').setView([46.2276, 2.2137], 6);

var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);


var district_boundary = new L.geoJson();
district_boundary.addTo(map);

$.ajax({
dataType: "json",
url: "https://raw.githubusercontent.com/calebbuffa/GIS-5091/main/Project%201/FRA_roads.geojson",
success: function(data) {
    $(data.features).each(function(key, data) {
        district_boundary.addData(data);
    });
}
}).error(function() {});
