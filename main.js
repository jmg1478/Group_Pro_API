   $("#submit").on("click", function () {
    var apiKey = "GVDtpierByardIa4AKpv8AZn9SfCOzbG";
    var beginParam = '';
    var endParam = '';
    var beginDate = '';
    var endDate = '';
   ​
   ​
   ​
    //TAKE IN VALUES FROM INPUT FIELDS
    var query = $('#searchTerm').val();
    if (query === '') {
     // Display error
    }
   ​
   ​
    var numRecords = $("#numRecords").val();
   ​
    var beginDate = $('#beginDate').val();
    var endDate = $('#endDate').val();
    if (beginDate !== null) {
     beginParam = '&begin_date=';
    } else {
     beginDate = '';
    }
   ​
    if (endDate !== null) {
     endParam = '&end_date=';
    } else {
     endDate = '';
   ​
    }
   ​
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}${beginParam}${beginDate}${endParam}${endDate}&api-key=${apiKey}`
   ​
    $.ajax({
     url: queryURL,
     method: "GET"
    }).then(function (r) {
   ​
     var articles = r.response.docs;
     for (var i = 0; i < numRecords; i++) {
      console.log(articles[i]);
     }
    })
   ​
   })