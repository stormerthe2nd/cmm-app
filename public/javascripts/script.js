
function myMap() {

  var mapProp = {
    center: new
      google.maps.LatLng(19.191373, 72.829863),
    zoom: 12,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: mapId || null,
    styles: []
  }

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}