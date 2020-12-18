

$(document).ready(function() {
   
    $("#search-btn").on("click", function(event) {
        event.preventDefault();

        var query       = $("#search-term-input").val();
        var beginYear   = $("#start-year-input").val();
        var endYear     = $("#end-year-input").val();


        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
            + query + "&begin_date=" + beginYear + "0101&end_date=" + endYear + 
            "0101&api-key=u7EoghAalikiEAE7MRKG4oMkPIm9RhOE";

        $.ajax({url: queryURL, method: "GET"}).then(function(response) {
            console.log(response);
        });
    });

    $("clear-results-button").on("click",function(event){
        
    })

});
