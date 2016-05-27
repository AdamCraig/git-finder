var user;
var git = require('../js/git.js');

$(document).ready(function(){
  $('#inputBox').submit(function(event){
    event.preventDefault();
    user = $('#userInput').val();
    $('#userInput').val("");

    $('.loadingImage').show();
    $('.repoList').empty();
    $('.outputHeader').empty();

    git.getReposAndDisplay(user);
  });
});
