const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const welcome = document.querySelector(".welcome");

let visited = Boolean(window.localStorage.getItem("visited")) || false;

setWelcome()

visited = true;

localStorage.setItem("visited", visited);

function setWelcome() {
    if (visited === false) {
        welcome.textContent = `Hello!`;
    }
    else {
        welcome.textContent = `Welcome Back!`;
    }
}