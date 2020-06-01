mapboxgl.accessToken = 'pk.eyJ1IjoiaGlpb3MiLCJhIjoiY2thdnU0OGF6MGowazJycGlnOWVxbHJjNSJ9.H7Ryf--admHTHdQaJQ0SkQ';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-90, 40], // starting position [lng, lat]
  zoom: 3 // starting zoom
});
map.on('load', function() {
  map.addSource('city', {
    type: 'geojson',
    // Change later for dynamic json
    data: "./test/example.json",
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50
  });
  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'city',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 20,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  });
  map.on('click', 'unclustered-point', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var {
      name,
      temperature,
      sky,
      humidity,
      windspeed
    } = e.features[0].properties

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(
        'Name: ' + name +
        '<br>Temperature: ' + temperature +
        '<br>Sky: ' + sky +
        '<br>Humidity: ' + humidity +
        '<br>Windspeed: ' + windspeed
      )
      .addTo(map);
  });
});
