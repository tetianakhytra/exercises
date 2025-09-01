"use strict"
import { getRandomNum } from "../utilis/utilis.js"

const number = getRandomNum(101);

console.log("Tilfældigt tal " + number);

document.getElementById("button").addEventListener("click", function () {
  const userNumber = Number(document.getElementById("number").value);
  const result = document.getElementById("result");

  if (userNumber === number) {
    result.textContent = "Correct!!!";
  } else if (userNumber < number) {
    result.textContent = "Too low!";
  } else {
    result.textContent = "Too high!";
  }
});
