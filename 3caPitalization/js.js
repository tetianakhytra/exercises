const str = "teTiana";

// only 3rd letters capslock
const result =
  str.slice(0, 2) + // "te"
  str.slice(2, 3).toUpperCase() + // "T"
  str.slice(3); // "iana" (3) the rest

console.log(result); // teTiana




// or we can also make a function:
function formatName(str) {
  return str.substring(0, 2).toLowerCase()   // first two letters lowercase
       + str.substring(2, 3).toUpperCase()   // third letter uppercase
       + str.substring(3).toLowerCase();     // rest lowercase
}

// Tests
console.log(formatName("tetiana"));   // teTiana
console.log(formatName("TETIANA"));   // teTiana
console.log(formatName("tETiAnA"));   // teTiana

