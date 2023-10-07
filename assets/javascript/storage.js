//on submit click if local storage variable previousCity is !null, do init map with citySelect.value = previousCity
// if (localstorageVar !== null) {citylocation = cities[localstorageVAr] }
//else { city location = cities[selectedCity]}
// localStorage.setItem("previousHistory", previousHistory);
// previousHistory = JSON.parse(localStorage.getItem("previousHistory"));
// whatevr = ci
// startupfucntion { if !== null var map = new google.maps.Map(mapDiv, {    zoom: 12,    center: localstorage value,}

//on click it saves the text content of the drop down option and the value as an object and pushes it into an array (previousCities), then sets it to local storage
//on page start up, it parses the previousCities. if previousCities is empty, previousCities = [], else, run the button making function
//the button making function is a for loop, (let i =0; i < previousCities; i++) each loop it makes button with the option value as a value
// and option text content as the text content. then appends that button to a search history div
// when the button is clicked the value is used in a function similar to initmap but this button's value is used to center instead of citySelect.value
// as well as a function similar to update search but again with this button's value used instead of citySelect.
let searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

if (!searchHistory) {
  searchHistory = [];
} else {
  initsearchHistory();
  console.log(searchHistory);
}
function mapfromHistorybtn() {
  let cities = {
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
  let mapDiv = document.getElementById("map");

  let cityMap = cities[event.target.value];
  new google.maps.Map(mapDiv, {
    zoom: 12,
    center: cityMap,
  });
}

function initsearchHistory() {
  let searchHistorydiv = document.getElementById("searchHistory");

  searchHistorydiv.innerHTML = "";

  let historydivLabel = document.createElement("label");

  historydivLabel.classList.add("label");

  historydivLabel.textContent = "Previous Searches:";

  searchHistorydiv.appendChild(historydivLabel);

  searchHistorydiv.classList.remove("is-hidden");

  for (let i = 0; i < searchHistory.length; i++) {
    let buttonText = searchHistory[i].Text;
    // console.log(buttonText);
    let buttonValue = searchHistory[i].Value;
    // console.log(buttonValue);
    let historyBtn = document.createElement("button");

    historyBtn.textContent = buttonText;

    historyBtn.setAttribute("value", buttonValue);

    historyBtn.classList.add("button", "m-1");

    searchHistorydiv.appendChild(historyBtn);
  }
  searchHistorydiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("button")) {
      console.log("clicked");
      console.log(event.target.value);
      mapfromHistorybtn();
    }
  });
}
