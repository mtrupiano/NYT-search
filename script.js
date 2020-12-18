

$(document).ready(function() {

    $("#search-button").click(function(event) {
        event.preventDefault();

        var query       = $("#search-term-input").val();
        var beginYear   = $("#start-year-input").val();
        var endYear     = $("#end-year-input").val();
        var numberOfResults = $("#record-number-input").val();

        if (beginYear !== "") {
            beginYear = "&begin_date=" + beginYear + "0101";
        }
        
        if (endYear !== "") {
            endYear = "&end_date=" + endYear + "1231";
        }

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
            + query + beginYear + endYear + 
            "&api-key=u7EoghAalikiEAE7MRKG4oMkPIm9RhOE";
        
        var results = [];
        $.ajax({url: queryURL, method: "GET"}).then(function(response) {
            results = results.concat(response.response.docs);
            renderArticles(results, numberOfResults);
            console.log(results);
        });
        
    });

    $("#clear-results-button").click(function(event) {
        // set results div inner HTML to empty
        $("#results").html("");
    });

    function renderArticles(articles, numberOfResults) {
        
        for (var i = 0; i < numberOfResults; i++) {
            var newDiv = $("<div>").addClass("row");
            newDiv.append($("<h3>").text(articles[i].headline.main));
            newDiv.append($("<h4>").text(articles[i].byline.original));
            $("#results").append(newDiv);
        }

    }

});
