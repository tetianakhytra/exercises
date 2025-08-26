console.log("Tilfældigt tal"+ (Math.floor(Math.random()*100)+1));

const randomNumber = Math.floor(Math.random()*100)+1;
const numberElement=document.getElementById('randomNumber');
numberElement.textContent=randomNumber;