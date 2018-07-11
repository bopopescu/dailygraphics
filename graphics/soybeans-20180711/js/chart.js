
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});


var map = L.map('graphic');


$.getJSON("js/soybeans.geojson", function(data) {

    geojson = L.geoJson(data, {

            style: function (feature) {
                return {
                  fillColor: getColor(feature.properties.prodnum),
                  //fillcolor: "red",
                  weight: 1,
                  opacity: 1,
                  color: 'white',
                  dashArray: '',
                  fillOpacity: 0.8
                };
              },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(
        '<h5><strong>' + feature.properties.NAMELSAD10 + '</strong></h5><table class="mapTable table-hover table-striped table-condensed"><tbody><tr><td><strong>Acres planted</strong></td><td>' + feature.properties.acresplanted + '</td></tr><tr><td><strong>Bushels per acre<br>(yield):</strong></td><td>' + feature.properties.yield + '</td></tr><tr><td><strong>2017 production<br>(total bushels):</strong></td><td>' + feature.properties.production + '</td></tr></tbody></table>', {maxWidth: 210} );
      }

    });

    // get color depending
    function getColor(d) {
      return d > 9094167 ? '#0072bc' :
             d > 7172667 ? '#82a7c7' :
             d > 5514500 ? '#9ddcf9' :
             d > 4103667 ? '#cee5b7' :
             d > 0 ?  '#fff9b8' :
                    '#FFFFFF' ;
      }



map.setView(new L.LatLng(39.75, -89.1),6);
map.addLayer(CartoDB);
geojson.addTo(map);

});
