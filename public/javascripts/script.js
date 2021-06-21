
let map, infoWindow;

function initMap() {

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
    origin: { lat: 50.064192, lng: -130.605469 },
    strictBounds: false,
    types: ["establishment"]
  })
  const onPlaceChange = function () {
    var place = autocomplete.getPlace()
    if (!place.geometry) document.getElementById("autocomplete").placeholder = "Search Location"
    else { map.setCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }) }
  }
  autocomplete.addListener("place_changed", onPlaceChange)
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 19.0760, lng: 72.8777 },
    streetViewControl: false,
    mapTypeControl: false,
    mapId: mapId || "",
    zoom: 12,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button", "btn", "btn-light", "mt-2", "btn-sm");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map.setCenter(pos);
          new google.maps.Marker({
            position: pos,
            map: map,
            icon: "https://sampwiki.blast.hk/wroot/images2/a/ad/Icon_2.gif"
          });

        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


