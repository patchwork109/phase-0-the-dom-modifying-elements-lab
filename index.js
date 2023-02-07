// const element = document.createElement('div');
// // tell it WHERE I want to append it, then, what I want to append
// document.body.append(element);

// const ul = document.createElement('ul');
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     li.textContent = (i + 1);
//     ul.append(li);
// }

// element.append(ul);

const main = document.querySelector("#main");
main.textContent = "You've changed what's on the screen!";
main.style.backgroundColor = "#27647B";
main.style.color = "white";
main.style.textAlign = "center";
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;

// Adds a class name to my div that I've declared as "element"
// element.className = "pet-listing-dog";



// Code to get the tests to pass
main.remove();

const newHeader = document.createElement("h1");
const body = document.querySelector("body");

body.append(newHeader);

newHeader.id = "victory";

newHeader.textContent = "Sam is the champion!"; 



