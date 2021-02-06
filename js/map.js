let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.558, lng: 34.948 },
    zoom: 15,
  });
  new google.maps.Marker({
    position: map.center,
    map,
    title: "Hello World!",
  });
  
google.maps.event.addListener(map, "click", (event) => {
  addMarker(event.latLng, map);
});
// Add a marker at the center of the map.
// addMarker(map.position, map);
}
function addMarker(location, map) {
  var places = []
 var place = prompt('Enter The Name Of The Place')
  new google.maps.Marker({
    position: location,
    label: place,
    map: map,
  });

  document.querySelector('.modal').style.display = 'block'
  document.querySelector('h4').innerText = place
  places.push(place)
  saveToStorage('places',places) //  why every time i can keep only one value?
}

function deleteMarker () {
  document.querySelector('h4').innerText = 'Choose A Place'
  localStorage.clear()

}



