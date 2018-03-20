$(document).ready(function(){

let searchTerms = "space";
let numberRecords = 5;
let startDate = 18000101;
let endDate = 21000101;

$("#search-button").on("click", function(){
    searchTerms = $("#search-term").val();
    console.log(searchTerms);

    numberRecords = $("#number-records").val();
    console.log(numberRecords);
    
    startDate = $("#start-year").val();
    console.log(startDate);
    
    endDate = $("#end-year").val();
    console.log(endDate);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "bcced6ed17d54c78991a3ab69726bbba",
 "q": searchTerms,
 "begin_date": startDate,
 "end_date" : endDate,

});

console.log(url)


$.ajax({
    url: url,
    method: 'GET',
  }).then(function (result) {
      // Console logs the the first article object
      // Creates a variable equal to the number of returned articles
      let numOfArticles = result.response.docs.length
      // Creates all the page elements for articles
      for (let i = 0; i < numOfArticles; i ++) {
          let currentArticle = result.response.docs[i]
        //   console.log(currentArticle)
          let newArticle = $("<div>")
          newArticle.attr("class", "article-div")
          let linkElement = $("<a>")
          linkElement.attr("href", currentArticle.web_url)
          let headline = $("<h3>")
          headline.text(currentArticle.headline.main)
          let author = $("<p>")
          author.text(currentArticle.byline.original)
          linkElement.append(headline, author)
          newArticle.append(linkElement)
          $("#article-dump").append(newArticle)
      }
  })
    
})







});