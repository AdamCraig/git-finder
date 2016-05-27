var apiKey = require('./../.env').apiKey;

var repos = [];

var Repo = function(repoName, repoDescription, repoLanguage, repoUrl) {
  this.repoName = repoName;
  this.repoDescription = repoDescription;
  this.repoLanguage = repoLanguage;
  this.repoUrl = repoUrl;
};

exports.getReposAndDisplay = function(user, displayFunction, errorDisplayFunction) {
  repos = [];
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){

    $('.loadingImage').hide();
    console.log(response);
    response.forEach(function(repo) {
      var newRepo = new Repo(repo.name, repo.description, repo.language, repo.html_url);
      repos.push(newRepo);
    });

    displayFunction(repos);

  }).fail(function(error){
    $('.loadingImage').hide();
    console.log(error.responseJSON.message);
    errorDisplayFunction();
  });
};
