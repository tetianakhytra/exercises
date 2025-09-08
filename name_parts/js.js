const fullName = "Peter Heronimous Lind";

const firstName = fullName.substring(0, fullName.indexOf (" "));
const middleName = fullName.substring (fullName.indexOf(" ") +1, fullName.lastIndexOf(" "));
const lastName = fullName.substring (fullName.lastIndexOf(" "));



console.log("firstName:" , "_" + firstName + "_");
console.log ("middleName:" , "_" + middleName + "_");
console.log ("lastName:" , "_" + lastName + "_");