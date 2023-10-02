
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
