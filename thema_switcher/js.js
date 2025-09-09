"use strict";
const selector = document.getElementById("themeSelector");

    selector.addEventListener("change", (e) => {
      document.body.setAttribute("data-theme", e.target.value);
    });