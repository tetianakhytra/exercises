const list = document.querySelector("ul");
const customers = []; 


setInterval(genererSoejle, 1000);

function genererSoejle() {
    const randomNumber = Math.floor(Math.random() * 101);

    // add to array the random number
    customers.push(randomNumber);

    // create new <li>
    const li = document.createElement("li");
    li.style.setProperty("--height", randomNumber);
    list.appendChild(li);

    // if more then 20 delete the last one
    if (customers.length > 20) {
        customers.shift();                 // remove from array 1st element
        list.firstElementChild.remove();   // remove from  DOM (screen)
    }

    console.log(customers);
}
