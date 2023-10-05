
var url = "https://en.wikipedia.org/w/api.php"; 


//add search location variable to main JS file 

var cityName = loadLocal();//load last search here
var limit = 5;

function search(cityName){ 
    var params = {
        action: "opensearch",
        search: cityName,
        limit: limit,
        namespace: "0",
        format: "json"
    };
    
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

var lis
 fetch(url)
    .then(function(response){return response.json();} )
    .then(function(response) {
        console.log(response);
        var links = document.createElement("div");
        links.id = "links";
        document.querySelector('#wikiInfo').appendChild(links);

        for(i=0; i<response[1].length;i++){
            var li = document.createElement("li");
            document.querySelector('#links').appendChild(li);
            li.id = "link"+(i+1);
            //create list of elements to store links

            var link = document.createElement("a");
            link.setAttribute("href", response[3][i]);
            //get link from api
            link.innerHTML = response[1][i];
            //get title from api
            document.querySelector('#link'+(i+1)).appendChild(link);
        }
        //get title of first 5 search results
})
    .catch(function(error){console.log(error);})

}
document.getElementById("button").addEventListener("click", updateSearch);

function updateSearch(){
      var parent = document.getElementById("links");
      while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    //remove all child elements and add new ones with updated search results and links
    
    var searchName = document.getElementById("citySelect").value;
    saveLocal(searchName);
    search(searchName);
    //updates search results based on selection
}
function loadLocal(lastSearch){
   var search =  localStorage.getItem("lastSearch");
   return search;
}//load most recent search result from local storage

function saveLocal(lastSearch){
    localStorage.setItem("lastSearch", lastSearch);
}//save most recent search result to local storage


search(cityName);