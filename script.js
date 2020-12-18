

$(document).ready(function() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=u7EoghAalikiEAE7MRKG4oMkPIm9RhOE"


    var query;
    
    $("").on("click", function(event) {

        query = $("#term-field").text();
    });
});
