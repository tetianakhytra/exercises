export function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}


// --- Guessing game logic ---
export let low = 1;
export let high = 100;
export let attempts = 0;
export let guess;

export function makeGuess() {
  guess = Math.floor((low + high) / 2);
  attempts++;
  return guess;
}

export function resetGame() {
  low = 1;
  high = 100;
  attempts = 0;
}

// Random number generator
export function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

// Update text and color of an element
export function updateMessage(id, text, color = "black") {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = text;
    el.style.color = color;
  }
}

// Show/hide elements
export function toggleElement(id, show = true) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = show ? "inline-block" : "none";
  }
}