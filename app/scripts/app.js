$(document).ready(function(){
  var map;
  function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(35.681382,139.766084)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
                              mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

});
