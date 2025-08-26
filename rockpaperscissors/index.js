"use strict";

let userChoice;
let computerChoice;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const winText = document.getElementById("win");
const loseText = document.getElementById("lose");
const drawText = document.getElementById("draw");

// Map choices to CSS classes for images
const handClasses = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors"
};

// Add event listeners to buttons
addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  paperBtn.addEventListener("click", paperKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
}

// Button click functions
function rockKlik() {
  hideResults();
  userChoice = "rock";
  computerGuess();
  animationStarter();
}

function paperKlik() {
  hideResults();
  userChoice = "paper";
  computerGuess();
  animationStarter();
}

function scissorsKlik() {
  hideResults();
  userChoice = "scissors";
  computerGuess();
  animationStarter();
}

// Hide previous results
function hideResults() {
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");
}

// Computer random choice
function computerGuess() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNum];
  console.log("computerChoice", computerChoice);
}

// Start shake animation
function animationStarter() {
  // Add shake class
  player1.className = "player shake";
  player2.className = "player shake";

  // Wait for animation to finish 
  setTimeout(animationEnd, 1800);
}

// End animation and show results
function animationEnd() {
  // Remove shake and show final hand images
  player1.className = `player ${handClasses[userChoice]}`;
  player2.className = `player ${handClasses[computerChoice]}`;

  // Show result text
  showResultScreen();
}

// Show winner/loser/draw
function showResultScreen() {
  // Hide old messages 
  hideResults();

  // Decide winner
  if (userChoice === computerChoice) {
    drawText.classList.remove("hidden");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winText.classList.remove("hidden");
  } else {
    loseText.classList.remove("hidden");
  }
}
