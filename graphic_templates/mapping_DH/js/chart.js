
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});


var map = L.map('graphic');


$.getJSON("js/VGmachines.geojson", function(data) {

    geojson = L.geoJson(data, {

            style: function (feature) {
                return {
                  fillColor: getColor(feature.properties.vgPer1000),
                  weight: 1,
                  opacity: 1,
                  color: 'white',
                  dashArray: '',
                  fillOpacity: 0.8
                };
              },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(
        '<h5><strong>' + feature.properties.vgMuni + '</strong></h5><table class="mapTable table-hover table-striped table-condensed"><tbody><tr><td><strong># of gambling places:</strong></td><td>' + feature.properties.vgPlaces + '</td></tr><tr><td><strong>Total machines:</strong></td><td>' + feature.properties.vgVGs + '</td></tr><tr><td><strong>Machines per 1,000 pop.:</strong></td><td>' + feature.properties.vgPer1000 + '</td></tr><tr><td><strong>Pop. per machine:</strong></td><td>' + feature.properties.vgPopVG + '</td></tr><tr><td><strong>Earnings for municipality:</strong></td><td>' + feature.properties.vgShare + '</td></tr></tbody></table>', {maxWidth: 210} );
      }

    });

    // get color depending
    function getColor(d) {
      return d > 4.2 ? '#0072bc' :
             d > 2.8 ? '#82a7c7' :
             d > 2.2 ? '#9ddcf9' :
             d > 1.6 ? '#cee5b7' :
             d > 0 ?  '#fff9b8' :
                    '#FFFFFF' ;
      }



map.setView(new L.LatLng(41.91, -88.1),10);
map.addLayer(CartoDB);
geojson.addTo(map);

});
