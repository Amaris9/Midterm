// Displays warning message
alert("Warning");
alert(
  "Before we begin, while many of the plants in this quiz are used for medicinal purposes, when taken in the wrong doseages they can be dangerous. If you are interested in trying herbal medicine, then please consult with a medical professional. This quiz is meant to be a fun demonstration of my love for natural medicine. So please use common sense, be safe, and have fun!"
);
// Creates variables
let count = 0;
let poison = false;
let poisonQuest1, poisonQuest2;
let herbalQuest1, herbalQuest2;
const yourName = prompt("Hello, my name is Belladonna. What is your name?");

// Makes question appear in body
herbalQuest1 = document.createElement("p");
herbalQuest1.textContent =
  "What plant is commonly used to help heal sun burns, eczema, and can even help small wounds heal faster?";
document.body.appendChild(herbalQuest1);

// Creates Aloe button
const aloeButton = document.createElement("button");
aloeButton.textContent = "Aloe";
document.body.appendChild(aloeButton);

// Creates Yarrow button
const yarrowButton = document.createElement("button");
yarrowButton.textContent = "Yarrow";
document.body.appendChild(yarrowButton);

function firstQuestion() {
  if (yarrowButton) {
  }
}
