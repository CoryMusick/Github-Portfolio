import repoData from './Repos.js'

// get html container
const container = document.querySelector("#repos-container");

console.log(repoData);


// for each repo build component
Object.values(repoData).forEach(repo =>{
  // repo name
  let name = repo.name;
  // repo about section
  let description = repo.description;
  // url to repo on github
  let repoURL = repo.html_url;
  // last commit
  let lastUpdate = repo.updated_at.split("T")[0];
  // create repo container
  let repoHTML = document.createElement('div'); 
  repoHTML.style = ` 
  margin-bottom: 12px; 
  border-radius: 5%; 
  min-width: 250px;
  max-width: 500px; 
  border: 2px solid #3a86ff;;
  padding: 0 6px;     
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px`
  
  // create name element
  let nameHTML = document.createElement('h3')
  nameHTML.style = "color: #3a86ff";
  nameHTML.textContent = name;
 
  //create link to github page and create element
  let pageURL = "https://corymusick.github.io/"+name; 
  let pageURLHTML = document.createElement("a");
  pageURLHTML.setAttribute("href", pageURL);
  pageURLHTML.textContent = "Live Link";
  pageURLHTML.style = "padding-right: 6px; border-right: 1px solid #3a86ff;"
  pageURLHTML.classList.add("link")
  pageURLHTML.addEventListener("mouseenter", (e) => {
    console.log(e.target)
    e.target.classList.toggle("link--hover")
  })
  pageURLHTML.addEventListener("mouseleave", (e) => {
    e.target.classList.toggle("link--hover")
  })
 
  // create description element
  let descriptionHTML = document.createElement('p')
  descriptionHTML.textContent = description;
  descriptionHTML.style="max-height: 100px;"
 
  //create url element
  let repourlHTML = document.createElement('a');
  repourlHTML.setAttribute("href", repoURL)
  repourlHTML.textContent = "Repo Link";
  repourlHTML.style='padding-left: 6px;'
  repourlHTML.classList.add("link")
  repourlHTML.addEventListener("mouseenter", (e) => {
    console.log(e.target)
    e.target.classList.toggle("link--hover")
  })
  repourlHTML.addEventListener("mouseleave", (e) => {
    e.target.classList.toggle("link--hover")
  })
 
  // create last update element
  let lastUpdateHTML = document.createElement('p')
  lastUpdateHTML.textContent = "Latest Update: " + lastUpdate;
  
  //build repo component
  repoHTML.appendChild(nameHTML);
  repoHTML.appendChild(descriptionHTML);
  repoHTML.appendChild(pageURLHTML);
  repoHTML.appendChild(repourlHTML);
  repoHTML.appendChild(lastUpdateHTML)
  
  //append component to container 
  container.appendChild(repoHTML);

})

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
link.addEventListener("mouseenter",(e) => {
  e.target.classList.toggle("nav-link--hover");
})
link.addEventListener("mouseleave",(e) => {
  e.target.classList.toggle("nav-link--hover");
})
})
