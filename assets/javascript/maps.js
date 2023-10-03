function initMap() {
  //Declaring variables to get the map div and also the city select
  var mapDiv = document.getElementById("map");
  var citySelect = document.getElementById("citySelect");

  // List of cities and their lat and lng
  //We can add more cities if needed
  var cities = {
    home: { lat: 38.8997, lng: -77.0486 },
    paris: { lat: 48.8566, lng: 2.3522 },
    newyork: { lat: 40.7128, lng: -74.006 },
    london: { lat: 51.5074, lng: -0.1278 },
  };
  //Defining the city that was selected and the location by pulling it out of the array
  var selectedCity = citySelect.value;
  var cityLocation = cities[selectedCity];

  //updating the location of the map by calling the mapDiv and centering
  //the location at city Location
  var map = new google.maps.Map(mapDiv, {
    zoom: 12,
    center: cityLocation,
  });
}
//Adding an event listener to the button ID which will call the function
//initMap when clicking the submit button
document.getElementById("button").addEventListener("click", function () {
  initMap();
});
