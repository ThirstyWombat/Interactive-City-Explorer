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
}
