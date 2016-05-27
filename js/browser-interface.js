var user;
var git = require('../js/git.js');
var icon = "<span class='glyphicon glyphicon-cloud-download'></span>";

var displayFunction = function(repos, avatar) {
    $('.outputHeader').append("Here's a list of the first 100 repos listed under the user <strong>" + user + ":</strong> <br>" + "<br> <img class='userAvatar' src='" + avatar + "'> <br> (Click on a repo\'s icon to go to its page.) <br>");

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
