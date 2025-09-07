const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const countCell = document.getElementById("countCell");
const buttons = document.querySelectorAll("button");



showTheseVehicles(vehicles);



 // ??"" checks when there is no properties information 
 function showTheseVehicles(arr) {
      tbodyPointer.innerHTML = "";
      arr.forEach((each) => {
        tbodyPointer.innerHTML += `<tr>
          <td>${each.type ?? ""}</td>
          <td>${each.fuel ?? ""}</td>
          <td>${each.passengers ?? ""}</td>
          <td>${each.stops ? each.stops.join(", ") : ""}</td>
          <td>${each.ownedBy ?? ""}</td>
          <td>${each.isElectric ? "Ja" : ""}</td>
          <td>${each.isTandem ? "Ja" : ""}</td>
        </tr>`;
      });
      countCell.textContent = arr.length;
    }

    // filtreringer
    const filterAll = () => vehicles;
    const filterElectric = () => vehicles.filter(v => v.isElectric);
    const filterSeats = () => vehicles.filter(v => v.passengers > 2);
    const filterJonasElectric = () => vehicles.filter(v => v.isElectric && v.ownedBy === "Jonas");
    const filterRugbrod = () => vehicles.filter(v => v.fuel === "Rugbrød" && v.passengers > 1);

    function setActive(btn) {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    // knapper
    document.getElementById("btnAll").addEventListener("click", (e) => { showTheseVehicles(filterAll()); setActive(e.target); });
    document.getElementById("btnElectric").addEventListener("click", (e) => { showTheseVehicles(filterElectric()); setActive(e.target); });
    document.getElementById("btnSeats").addEventListener("click", (e) => { showTheseVehicles(filterSeats()); setActive(e.target); });
    document.getElementById("btnJonas").addEventListener("click", (e) => { showTheseVehicles(filterJonasElectric()); setActive(e.target); });
    document.getElementById("btnRugbrod").addEventListener("click", (e) => { showTheseVehicles(filterRugbrod()); setActive(e.target); });

    // vis alle til at starte med
    showTheseVehicles(vehicles);
 