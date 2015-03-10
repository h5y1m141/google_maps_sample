$(document).ready(function(){
  var map,
      lat = 35.681382,
      lng = 139.766084,
      latLng = new google.maps.LatLng(lat,lng),
      overlay;
  var marker = new google.maps.Marker({
    position: latLng,
    title:"Hello World!"
  });
  var mapOptions = {
    zoom: 16,
    center: latLng
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
                            mapOptions);  
  function initialize() {
    marker.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addListener(marker, 'click', function(){
    overlay =  new OverLay();
    console.log(overlay);

    overlay.setContent('<h1>your html content</h1>');
    overlay.open(map, marker);
  }.bind(this));
});


