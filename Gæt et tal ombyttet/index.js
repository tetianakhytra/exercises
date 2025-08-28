"use strict";

let low = 1;
let high = 100;
let attempts = 0;
let guess;

// Function for computer to make a guess
function makeGuess() {
  guess = Math.floor((low + high) / 2);
  attempts++;
  const message = document.getElementById('message');

message.innerText = `Is it ${guess}?`;
}

// Start game button
document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('start').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  makeGuess();
});

// if guess is too high
document.getElementById('less').addEventListener('click', () => {
  high = guess - 1;
  makeGuess();
});

// guess too low
document.getElementById('more').addEventListener('click', () => {
  low = guess + 1;
  makeGuess();
});

//correct guess
document.getElementById('correct').addEventListener('click', () => {
  const message = document.getElementById('message');
  message.innerText = `Correct! You used ${attempts} attempts to guess the number! 🎉`;
  message.style.color = "#38b2ac"; 

  // Hide guess buttons and name
  document.getElementById('less').style.display = 'none';
  document.getElementById('more').style.display = 'none';
  document.getElementById('correct').style.display = 'none';
  document.getElementById('name').style.display = 'none';
  

  // Show restart button
  document.getElementById('restart').style.display = 'inline-block';
});

// Restart button to play again
document.getElementById('restart').addEventListener('click', () => {
  // Reset variables
  low = 1;
  high = 100;
  attempts = 0;

  // Reset message color
  const message = document.getElementById('message');
  message.style.color = "black";

  // Hide restart button
  document.getElementById('restart').style.display = 'none';

  // Show guess buttons again
  document.getElementById('less').style.display = 'inline-block';
  document.getElementById('more').style.display = 'inline-block';
  document.getElementById('correct').style.display = 'inline-block';
  document.getElementById('name').style.display = 'inline-block';
  document.getElementById('less').disabled = false;
  document.getElementById('more').disabled = false;
  document.getElementById('correct').disabled = false;

  // Make the  guess again
  makeGuess();
});
