"use strict";

    const replacements = [
      { bad: "var", good: "const" },
      { bad: "float", good: "grid" },
      { bad: "marquee", good: "just don't" }
    ];

    const textElement = document.getElementById("text");
    const button = document.getElementById("replaceBtn");
    const dialog = document.getElementById("infoDialog");
    const closeDialog = document.getElementById("closeDialog");

    function replaceWords() {
      let text = textElement.innerHTML;
      let changed = false;

      replacements.forEach(pair => {
        //Loops through every element in the replacements array.
//Each element (pair) is an object with two properties: bad (the word to replace) and good (the word to replace it with).
        const regex = new RegExp(`\\b${pair.bad}\\b`, "gi");
        if (regex.test(text)) {
          text = text.replace(regex, `<span class="highlight">${pair.good}</span>`);
         // so it can be visually highlighted on the page
          changed = true;
        }
      });

      if (changed) {
        textElement.innerHTML = text;
        //If the text was changed, it updates the HTML content of textElement.
//If no changes were made, it shows a modal dialog
      } else {
        dialog.showModal();
      }
    }

    button.addEventListener("click", replaceWords);
    closeDialog.addEventListener("click", () => dialog.close());
