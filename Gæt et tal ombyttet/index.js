import { makeGuess, resetGame, guess, attempts, low, high, updateMessage, toggleElement } from "./utilis/utilis.js";

// Start button
document.getElementById("startButton").addEventListener("click", () => {
  toggleElement("start", false);
  toggleElement("game", true);
  updateMessage("message", `Is it ${makeGuess()}?`);
});

// Too high
document.getElementById("less").addEventListener("click", () => {
  high = guess - 1;
  updateMessage("message", `Is it ${makeGuess()}?`);
});

// Too low
document.getElementById("more").addEventListener("click", () => {
  low = guess + 1;
  updateMessage("message", `Is it ${makeGuess()}?`);
});

// Correct
document.getElementById("correct").addEventListener("click", () => {
  updateMessage("message", `Correct! You used ${attempts} attempts 🎉`, "#38b2ac");
  toggleElement("less", false);
  toggleElement("more", false);
  toggleElement("correct", false);
  toggleElement("name", false);
  toggleElement("restart", true);
});

// Restart
document.getElementById("restart").addEventListener("click", () => {
  resetGame();
  updateMessage("message", "");
  toggleElement("less", true);
  toggleElement("more", true);
  toggleElement("correct", true);
  toggleElement("name", true);
  toggleElement("restart", false);
  updateMessage("message", `Is it ${makeGuess()}?`);
});
