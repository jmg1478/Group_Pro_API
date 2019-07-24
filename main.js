var numRecords;

$('.dropdown-menu > a').click(function(e){
  $('#numRecords').text(`Number of items to show: ${$(this).text()}`);
  numRecords = parseInt($(this).text());
});

$("#submit").on("click", function () {
  console.log("test");
  var apiKey = "GVDtpierByardIa4AKpv8AZn9SfCOzbG";
  var beginParam = '';
  var endParam = '';
  var beginDate = '';
  var endDate = '';



  //TAKE IN VALUES FROM INPUT FIELDS
  var query = $('#searchTerm').val();
  if (query === '') {
    // Display error
  }


  // var numRecords = $("#numRecords").val();

  // if ($('#startDate').val() != null) {
  //   beginDate = $('#startDate').val();
  //   beginParam = '&begin_date=';

  // }
  
  // if ($('#endDate').val() != null) {
  //   endDate = $('#startDate').val();
  //   endParam = '&end_date=';
  // } 

  // var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}${beginParam}${beginDate}${endParam}${endDate}&api-key=${apiKey}`


  var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (r) {
    console.log(r);
    var articles = r.response.docs;
    for (var i = 0; i < numRecords; i++) {
      console.log(articles[i]);
    }
  })

})