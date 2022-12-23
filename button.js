document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("git");
    y.addEventListener("click", openGithub);
 });

 document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("twi");
    y.addEventListener("click", openTwitter);
 });

 document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("link");
    y.addEventListener("click", openWebsite);
 });
 
 function openGithub() {
    chrome.tabs.create({active: true, url: "https://github.com/mayur57/countless"});
 }

 function openTwitter() {
    chrome.tabs.create({active: true, url: "https://twitter.com/mayurbhoii"});
 }

 function openWebsite() {
    chrome.tabs.create({active: true, url: "https://mayurbhoi.com"});
 }