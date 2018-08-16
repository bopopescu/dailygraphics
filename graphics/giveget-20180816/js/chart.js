
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});


var map = L.map('graphic');


$.getJSON("js/giveget.geojson", function(data) {

    geojson = L.geoJson(data, {

            style: function (feature) {
                return {
                  fillColor: getColor(feature.properties.color),
                  weight: 1,
                  opacity: 1,
                  color: 'white',
                  dashArray: '',
                  fillOpacity: 0.8
                };
              },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(
        '<h5><strong>' + feature.properties.NAMELSAD10 + '</strong></h5><table class="mapTable table-hover table-striped table-condensed"><tbody><tr><td><strong>Ratio:</strong></td><td>' + feature.properties.Ratio + '</td></tr><tr><td><strong>Selected revenue:</strong></td><td>' + feature.properties.Selected_revenue + '</td></tr><tr><td><strong>Selected disbursements:</strong></td><td>' + feature.properties.Selected_disbursements + '</td></tr></tbody></table>', {maxWidth: 210} );
      }

    });

    // get color depending
    function getColor(d) {
      return d == "red" ? '#e31a1c' :
             d == "orange" ? '#ff7f00' :
             d == "lightorange" ? '#fdbf6f' :
             d == "lightgreen" ? '#97d5c9' :
             d == "green" ?  '#028575' :
             d == "darkgreen" ?  '#00473d' :
                    '#FFFFFF' ;
      }


map.setView(new L.LatLng(40, -89.09),6);
map.addLayer(CartoDB);
geojson.addTo(map);

});
