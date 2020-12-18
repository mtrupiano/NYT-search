

$(document).ready(function() {

    $("#search-button").click(function(event) {
        event.preventDefault();

        var query       = $("#search-term-input").val();
        var beginYear   = $("#start-year-input").val();
        var endYear     = $("#end-year-input").val();

        if (beginYear !== "") {
            beginYear = "&begin_date=" + beginYear + "0101";
        }
        
        if (endYear !== "") {
            beginYear = "&end_date=" + endYear + "0101";
        }

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
            + query + beginYear + endYear + 
            "&api-key=u7EoghAalikiEAE7MRKG4oMkPIm9RhOE";
    
        $.ajax({url: queryURL, method: "GET"}).then(function(response) {
            renderArticles(response.docs);
            console.log(response);
        });

    });

    $("#clear-button").click(function(event) {

    });

    function renderArticles(articles) {
        
    }

});
