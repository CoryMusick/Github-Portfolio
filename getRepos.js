require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { Octokit } = require("@octokit/core");
const key = process.env.key


const getRepos = async () => {
  const octokit = new Octokit({auth: key });
  const userName = process.env.userName;

  const repoResponse = await octokit.request("GET /users/"+userName+"/repos");
  const data = repoResponse.data;

  const reposWithPages = data.filter((repo) => {
    return repo.has_pages;
  })
  fs.writeFile(path.join(__dirname, "Repos.js"), "export default " + JSON.stringify(reposWithPages), (err) => {
    if (err) throw err;
    console.log("Repo File Written");
  });

}

getRepos();