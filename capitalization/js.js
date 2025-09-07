//option 1:

const firstName = "teTIana";

const lowerCaseFirstName = firstName.toLowerCase();
const upperCaseFirstChar = lowerCaseFirstName.toUpperCase().charAt(0);
const newFirstName = lowerCaseFirstName.replace(lowerCaseFirstName.charAt(0), upperCaseFirstChar);


console.log(newFirstName);


//option 2:

function formatFirstName(name) {
  const lower = name.toLowerCase();
  return lower.substring(0, 1).toUpperCase() + lower.substring(1); 
}

console.log(formatFirstName("teTIana")); // result Tetiana
console.log(formatFirstName("TETIANA")); // result Tetiana