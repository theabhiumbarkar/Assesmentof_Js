
var birthYear = 1988;
var futureYear = 2026;


var currentYear = new Date().getFullYear(); 
var currentAge = currentYear - birthYear;
var possibleAge1 = futureYear - birthYear;
var possibleAge2 = possibleAge1 - 1;


console.log("If you were born in " + birthYear + ", then in " + futureYear + " you'll be " + possibleAge1 + " or " + possibleAge2);
