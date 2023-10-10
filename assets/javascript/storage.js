let searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
//Pulls the search history from local storage
if (!searchHistory) {
  searchHistory = [];
} else {
  initsearchHistory();
}
//Checks to see if the search history is empty. If so it sets the search history variable to an empty array. If not, it executes initsearchHistory.
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
  //Uses the value taken from the search history button clicked to center the map.
}

function wikifromHistorybtn() {
  let url = "https://en.wikipedia.org/w/api.php";

  let limit = 5;

  let userSearch = event.target.textContent;
  //Sets the clicked button's text value as the search parameter.
  let wikiinfoDiv = document.getElementById("wikiInfo");

  wikiinfoDiv.innerHTML = "";
  //Clears the inner html of the wiki info div so that the previously generated list of links is removed.
  let wikiHeader = document.createElement("h1");

  wikiHeader.textContent = "Search Results:";

  wikiinfoDiv.appendChild(wikiHeader);
  //Recreatees the h1 element and it's text content and appends it to the wiki info div
  function search(userSearch) {
    let params = {
      action: "opensearch",
      search: userSearch,
      limit: limit,
      namespace: "0",
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
      url += "&" + key + "=" + params[key];
    });
    fetch(url)
      .then(function (response) {
        return response.json();
      })

      .then(function (response) {
        let links = document.createElement("div");

        links.id = "links";

        document.querySelector("#wikiInfo").appendChild(links);
        for (i = 0; i < response[1].length; i++) {
          let li = document.createElement("li");
          document.querySelector("#links").appendChild(li);
          li.id = "link" + (i + 1);
          //create list of elements to store links

          var link = document.createElement("a");
          link.setAttribute("href", response[3][i]);
          //get link from api
          link.innerHTML = response[1][i];
          //get title from api
          document.querySelector("#link" + (i + 1)).appendChild(link);
        }
      });
  }

  search(userSearch);
}

function initsearchHistory() {
  let searchHistorydiv = document.getElementById("searchHistory");

  searchHistorydiv.innerHTML = "";

  let historydivLabel = document.createElement("label");

  historydivLabel.classList.add("label");

  historydivLabel.textContent = "Previous Searches:";

  searchHistorydiv.appendChild(historydivLabel);

  searchHistorydiv.classList.remove("is-hidden");
  //Clears any previous html inside the search history div, appends a new label to it, and removes the hidden class from the div to make it visible.
  for (let i = 0; i < searchHistory.length; i++) {
    let buttonText = searchHistory[i].Text;

    let buttonValue = searchHistory[i].Value;

    let historyBtn = document.createElement("button");

    historyBtn.textContent = buttonText;

    historyBtn.setAttribute("value", buttonValue);

    historyBtn.classList.add("button", "m-1");

    searchHistorydiv.appendChild(historyBtn);
    //A loop which iterates over the array taken from local storage, Uses the Text key of each object as the button's text contant and the Value key as it's value.
  }
  searchHistorydiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("button")) {
      mapfromHistorybtn();
      wikifromHistorybtn();
    }
    //a click event listener for the entire search history div which checks if the target was a button before executing the two functions.
  });
}
