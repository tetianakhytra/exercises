    async function fetchQueue() {
      try {
        const response = await fetch('https://kea-alt-del.dk/kata-distortion/');
        const data = await response.json();
        const numberEl = document.getElementById('queueNumber');

        if (numberEl.textContent != data.inQueue) {
          numberEl.textContent = data.inQueue;

          // trigger animation
          numberEl.classList.remove('pop'); // reset
          void numberEl.offsetWidth; // force reflow
          numberEl.classList.add('pop');
        }
      } catch (error) {
        console.error('Fejl ved hentning af data:', error);
      }
    }

    // Kør straks og derefter hvert 10. sekund
    fetchQueue();
    setInterval(fetchQueue, 10000);