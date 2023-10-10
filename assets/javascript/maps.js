function initMap() {
  //Declaring variables to get the map div and also the city select
  var mapDiv = document.getElementById("map");
  var citySelect = document.getElementById("citySelect");

  // List of cities and their lat and lng
  //We can add more cities if needed
  var cities = {
    washingtondc: { lat: 38.8997, lng: -77.0486 },
    amsterdam: { lat: 52.3676, lng: 4.9041 },
    barcelona: { lat: 41.3874, lng: 2.1686 },
    boston: { lat: 42.3601, lng: -71.0589 },
    chicago: { lat: 41.8781, lng: -87.6298 },
    losangeles: { lat: 34.0549, lng: -118.2426 },
    london: { lat: 51.5074, lng: -0.1278 },
    newyork: { lat: 40.7128, lng: -74.006 },
    paris: { lat: 48.8566, lng: 2.3522 },
    sanfran: { lat: 37.7749, lng: -122.4194 },
    seattle: { lat: 47.6061, lng: -122.3328 },
    seoul: { lat: 37.5519, lng: 126.9918 },
    Madrid: { lat: 40.4168, lng: -3.7038 },
    rome: { lat: 41.9028, lng: 12.4964 },
    tokyo: { lat: 35.6762, lng: 139.6503 },
  };

  //Defining the city that was selected and the location by pulling it out of the array
  var selectedCity = citySelect.value;

  var cityLocation = cities[selectedCity];

  //updating the location of the map by calling the mapDiv and centering
  //the location at city Location
  new google.maps.Map(mapDiv, {
    zoom: 12,
    center: cityLocation,
  });
}
//Adding an event listener to the button ID which will call the function
//initMap when clicking the submit button
// citySelect.addEventListener("change", function (){

// })
document.getElementById("button").addEventListener("click", function () {
  initMap();
  let choice = citySelect.selectedIndex;
  let choiceText = citySelect[choice].text;
  let choiceValue = citySelect[choice].value;
  console.log(choiceText);
  console.log(choiceValue);
  let savedInfo = { Text: choiceText, Value: choiceValue };
  console.log(savedInfo);
  let filteredHistory = searchHistory.filter(function (entry) {
    return entry.Value !== choiceValue;
  });
  console.log(filteredHistory);
  filteredHistory.push(savedInfo);
  localStorage.setItem("searchHistory", JSON.stringify(filteredHistory));
  //Saves the text content and value of the option picked as values in a object, filters the array for any repeated values, then pushes the object to the array
  // and sets it to local storage,
});

initMap();
