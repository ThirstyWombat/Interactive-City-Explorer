var url = "https://en.wikipedia.org/w/api.php";

//add search location variable to main JS file

var cityName = "Washington DC"; //load last search here
var limit = 5;
var citySelection = document.getElementById("citySelect");

function search(cityName) {
  var params = {
    action: "opensearch",
    search: cityName,
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
      var links = document.createElement("div");
      links.id = "links";
      document.querySelector("#wikiInfo").appendChild(links);

      for (i = 0; i < response[1].length; i++) {
        var li = document.createElement("li");
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
      //get title of first 5 search results
    })
    .catch(function (error) {
      console.log(error);
    });
}
document.getElementById("button").addEventListener("click", updateSearch);

function updateSearch() {
  var parent = document.getElementById("links");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  //remove all child elements and add new ones with updated search results and links

  var searchName = citySelection.options[citySelection.selectedIndex].text;
  saveLocal(searchName);
  //saves last search to local storage
  search(searchName);
  //updates search results based on selection
}

function saveLocal(lastSearch) {
  localStorage.setItem("lastSearch", lastSearch);
} //save most recent search result to local storage

function loadSearchHeader() {
  var searchHeader = document.createElement("h1");
  searchHeader.innerHTML = "Search Results:";
  searchHeader.id = "search-header";
  document.querySelector("#wikiInfo").appendChild(searchHeader);
}

loadSearchHeader();
search(cityName);
