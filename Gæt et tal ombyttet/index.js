import { makeGuess, resetGame, game, updateMessage } from "../utilis/utilis.js";

// Hide game and restart initially
document.getElementById("game").style.display = "none";
document.getElementById("restart").style.display = "none";

// Start button
document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "block";
  updateMessage("message", `Is it ${makeGuess()}?`);
});

// Too high
document.getElementById("less").addEventListener("click", () => {
  game.high = game.guess - 1;
  updateMessage("message", `Is it ${makeGuess()}?`);
});

// Too low
document.getElementById("more").addEventListener("click", () => {
  game.low = game.guess + 1;
  updateMessage("message", `Is it ${makeGuess()}?`);
});

// Correct
document.getElementById("correct").addEventListener("click", () => {
  updateMessage("message", `Correct! You used ${game.attempts} attempts 🎉`, "#38b2ac");
  document.getElementById("less").style.display = "none";
  document.getElementById("more").style.display = "none";
  document.getElementById("correct").style.display = "none";
  document.getElementById("restart").style.display = "inline-block";
});

// Restart
document.getElementById("restart").addEventListener("click", () => {
  resetGame();
  document.getElementById("less").style.display = "inline-block";
  document.getElementById("more").style.display = "inline-block";
  document.getElementById("correct").style.display = "inline-block";
  document.getElementById("restart").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("game").style.display = "none";
  updateMessage("message", "");
});
