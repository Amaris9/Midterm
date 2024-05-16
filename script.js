// Displays warning message
alert("Warning");
alert(
  "Before we begin, while many of the plants in this quiz are used for medicinal purposes, when taken in the wrong doseages they can be dangerous. If you are interested in trying herbal medicine, then please consult with a medical professional. This quiz is meant to be a fun demonstration of my love for natural medicine. So please use common sense, be safe, and have fun!"
);
// Creates variables
let count = 0;
let poison = false;
let poisonQuest1, poisonQuest2, poisonQuest3, poisonQuest4, poisonQuest5;
let herbalQuest1, herbalQuest2, herbalQuest3, herbalQuest4;
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
//aloeButton.addEventListener("click");

// Creates Yarrow button
const yarrowButton = document.createElement("button");
yarrowButton.textContent = "Yarrow";
yarrowButton.body.appendChild(yarrowButton);
//yarrowButton.addEventListener("click");

function firstQuestion() {
  //if(yarrowButton)
}
function herbalQuestions() {}

function poisonQuestions() {
  // Makes question appear in body(worked outside of function)
  poisonQuest1 = document.createElement("p");
  poisonQuest1.textContent =
    "While parsly and hemlock look very similar, hemlock can be fatal in high enough doses.Which of these two are hemlock";
  document.body.appendChild(poisonQuest1);
}
