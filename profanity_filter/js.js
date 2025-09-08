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
        const regex = new RegExp(`\\b${pair.bad}\\b`, "gi");
        if (regex.test(text)) {
          text = text.replace(regex, `<span class="highlight">${pair.good}</span>`);
          changed = true;
        }
      });

      if (changed) {
        textElement.innerHTML = text;
      } else {
        dialog.showModal();
      }
    }

    button.addEventListener("click", replaceWords);
    closeDialog.addEventListener("click", () => dialog.close());
