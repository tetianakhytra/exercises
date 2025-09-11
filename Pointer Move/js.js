"use strict";
(function () {
  const root = document.documentElement;

  // Startværdier (samme som i :root)
  let hue = 210;
  let sat = 50;
  let light = 50;

  // Event handler for pointer-move
  function handlePointerMove(e) {
    const x = e.clientX;
    const y = e.clientY;

    const width = window.innerWidth  /*width of the browser window in pixels*/
    const height = window.innerHeight /*height of the browser window in pixels*/

    // mouse coordination to the procent // procentregning: delen/detHele * 100
    let px = (x / width) * 100;   // lightness in %
    let py = (y / height) * 100;  // saturation in %

    // Limit the values from 0 to 100;
    light = Math.round(Math.min(Math.max(px, 0), 100));
    sat   = Math.round(Math.min(Math.max(py, 0), 100));

    // Update the CSS variables //style.setProperty
    root.style.setProperty("--l", String(light));
    root.style.setProperty("--s", String(sat));

  }

  // listening mouse moves
  window.addEventListener("pointermove", handlePointerMove, { passive: true });

  // listening changes of the window
  window.addEventListener("resize", () => {
  });
})();
