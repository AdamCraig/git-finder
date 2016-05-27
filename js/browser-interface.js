var user;
var git = require('../js/git.js');
var icon = "<span class='glyphicon glyphicon-cloud-download'></span>";

var displayFunction = function(repos) {
    $('.outputHeader').text("Here's a list of all repos listed under the user " + user + ":");

    repos.forEach(function(repo) {
      $('.repoList').append(
      "<div class='col-xs-4 repoBox'>" +
        "<a href='" + repo.repoUrl + "'>" +
          "<img class='repoIcon' src='img/repoIcon.png'>" +
        "</a>" + "<br>" +
        "<br>" + "<strong>Repository Name: </strong>" + repo.repoName +
        "<br>" + "<strong>Description: </strong>" + repo.repoDescription +
        "<br>" + "<strong>Primary Language: </strong>" + repo.repoLanguage +
      "</div>"
      );
      console.log(repo.repoUrl);
    });
};

var errorDisplayFunction = function() {
  $('.outputHeader').text("No repos found. Try another search above!");
};

$(document).ready(function(){
  $('#inputBox').submit(function(event){
    event.preventDefault();
    user = $('#userInput').val();
    $('#userInput').val("");

    $('.loadingImage').show();
    $('.repoList').empty();
    $('.outputHeader').empty();

    git.getReposAndDisplay(user, displayFunction, errorDisplayFunction);
  });
});
