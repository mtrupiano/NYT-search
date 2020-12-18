

$(document).ready(function() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 
                    + query + "&api-key=u7EoghAalikiEAE7MRKG4oMkPIm9RhOE"


    var query;
    
    var searchBtn;
    var clearBtn;
    var beginYearField;
    var endYearField;
    var numberField;
    var resultsContainer;

    $("#search-btn").on("click", function(event) {

        query = $("#term-field").text();
        $.ajax({url: queryURL, method: "GET"}).then(function(response) {
            console.log(response);
        });
    });

    function renderResults() {

    }
});
