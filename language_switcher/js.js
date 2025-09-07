"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Mein Name ist Tetiana", location: "p" }, // paragraph text
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Mit navn er Tetiana", location: "p" },
    ],
  },
};

// Funktion til at skifte tekster
function switchLanguage(lang) {
  const langTexts = texts[lang].texts;
  langTexts.forEach(item => {
    const element = document.querySelector(item.location);
    if (element) {
      element.textContent = item.text;
    }
  });
}

// Tilføj event listeners til knapperne
document.getElementById("btn-da").addEventListener("click", () => switchLanguage("da"));
document.getElementById("btn-de").addEventListener("click", () => switchLanguage("de"));

// Sæt standard sprog
switchLanguage("da");



// Klaus' måde
//console.log(texts[locale].texts);
//switchLanguage();
//function switchLanguage() {
  //texts[locale].texts.forEach((each) => {
    //console.log("each", each);
    //document.querySelector(each.location).textContent = each.text;});}
//document.querySelector("header").textContent = "tekst at sætte ind";