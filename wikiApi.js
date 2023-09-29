
var url = "https://en.wikipedia.org/w/api.php"; 


//add search location variable to main JS file 
var params = {
    action: "opensearch",
    search: "seattle",
    limit: "5",
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
        for(i=0; i<response[1].length;i++){
            console.log("here:: " + response[1][i]) ;
            var li = document.createElement("li");
            li.innerHTML = response[1][i];
            document.querySelector('#search-results').appendChild(li);
        }
        //get title of first 5 search results

       

        
})
    .catch(function(error){console.log(error);})
