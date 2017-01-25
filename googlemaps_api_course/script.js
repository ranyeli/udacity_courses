var map;

function initMap() {
  //Constructor create a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13
  });
  var tribeca = {lat: 40.719526, lng: -74.0089934};
  var markers = [];
  // var marker =  new google.maps.Marker({
  //     position: tribeca,
  //     map: map,
  //     title: "First Marker!"
  //     })
  // var infoWindow = new google.maps.InfoWindow({
  //   content: "I'm an info window yaahi!!"
  // });
  // marker.addListener('click', function(){
  //   infoWindow.open(map, markers[0]);
  // });
  var largeInfoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var locations = [
    {title: 'lilo', location:{lat: 40.719529, lng: -74.0089939}},
    {title: 'lilis', location:{lat: 40.719596, lng: -74.0089994}},
    {title: 'lila', location:{lat: 40.719926, lng: -74.0089134}},
    {title: 'linfo', location:{lat: 40.711526, lng: -74.0081934}},
    {title: 'lelo', location:{lat: 40.799526, lng: -74.0989934}}
  ];

  for (var i = 0, length = locations.length; i < length; i++) {
    var marker = new google.maps.Marker({
      position: locations[i].location,
      map: map,
      title: locations[i].title,
      animation: google.maps.Animation.DROP,
      id: i
    });
    markers.push(marker);
    bounds.extend(marker.position);
    marker.addListener('click', function(){
      populateInfoWindow(this, largeInfoWindow);
    })
  }
  map.fitBounds(bounds);
  function populateInfoWindow(marker, infoWindow){
    if(infoWindow.marker != marker){
      infoWindow.marker = marker;
      infoWindow.setContent('<div>' + marker.title + '</div>');
      infoWindow.open(map, marker);
      infoWindow.addListener('closeclick', function(){
        //infoWindow.setMarker(null);
        infoWindow.marker = null;
      });
    }
  }
}
