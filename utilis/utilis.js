// --- Game state ---
export const game = {
  low: 1,
  high: 100,
  attempts: 0,
  guess: null
};


// Make a guess
export function makeGuess() {
  game.guess = Math.floor((game.low + game.high) / 2);
  game.attempts++;
  return game.guess;
}

// Reset the game
export function resetGame() {
  game.low = 1;
  game.high = 100;
  game.attempts = 0;
  game.guess = null;
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
