"use strict";


const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];

    document.querySelector("button").addEventListener("click", klik)

    function klik(){
        let str ="";
      

        console.log(str)
bc.forEach((elm, index) =>{
    //if the last element of array its a string,not a link
if (index ===bc.length -1){
    str += `<li>${elm.name}</li>`;
}
else{
    //else we make it as a link and adding /
str += `<li><a href="${elm.link}">${elm.name}</a> / </li>`;}
});
//adding to ul
document.querySelector("ul").innerHTML=str;

    }