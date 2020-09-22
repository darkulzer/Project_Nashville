var myMap = L.map("map", {
  center: [36.162, -86.781],
  zoom: 13
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "https://data.nashville.gov/resource/kqb6-kd6q.json?$limit=10000";

d3.json(url, function (response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i].mapped_location;

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 30,
    blur: 35
  }).addTo(myMap)
    ;

});