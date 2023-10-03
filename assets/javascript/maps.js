function initMap() {
  //Declaring variables to get the map div and also the city select
  var mapDiv = document.getElementById("map");
  var citySelect = document.getElementById("citySelect");

  // List of cities and their lat and lng
  //We can add more cities if needed
  var cities = {
   
      dc: {lat: 38.8997, lng: -77.0486 },
      amsterdam: {lat:52.3676, lng:4.9041 },
      barcelona: {lat:41.3874, lng:2.1686},
      boston: {lat:42.3601, lng:-71.0589},
      chicago: {lat:41.8781, lng:-87.6298},
      losangeles: {lat:34.0549, lng:-118.2426},
      london: {lat: 51.5074, lng: -0.1278 },
      newyork: {lat: 40.7128, lng: -74.0060 },
      paris: {lat: 48.8566, lng: 2.3522 },
      sanfran: {lat: 37.7749, lng: -122.4194},
      seattle:{lat: 47.6061, lng: -122.3328},
      seoul: {lat: 37.5519, lng: 126.9918},
      Madrid: {lat: 40.4168, lng: -3.7038},
      rome: {lat: 41.9028, lng: 12.4964},
      tokyo: {lat: 35.6762, lng: 139.6503},
     
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
