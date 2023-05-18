var names = ["Maria", "Antony", "Joy", "Juan"];

function insertNameToEnd(name) {
  names.push(name);
}

insertNameToEnd("YourName");
console.log(names);
var names = ["Maria", "Antony", "Joy", "Juan"];

function checkNameExists(name) {
  return names.includes(name);
}

console.log(checkNameExists("Antony")); // true
console.log(checkNameExists("John"));   // false
var names = ["Maria", "Antony", "Joy", "Juan"];

function compareLists(list) {
  var commonNames = [];
  
  for (var i = 0; i < list.length; i++) {
    if (names.includes(list[i])) {
      commonNames.push(list[i]);
    }
  }
  
  return commonNames;
}

var otherNames = ["Joy", "John", "Antony"];
console.log(compareLists(otherNames)); // ["Joy", "Antony"]
function getLengthsOfNames(names) {
    var lengths = [];
  
    for (var i = 0; i < names.length; i++) {
      lengths.push(names[i].length);
    }
  
    return lengths;
  }
  
  var names = ["Maria", "Antony", "Joy", "Juan"];
  console.log(getLengthsOfNames(names)); // [5, 6, 3, 4]
  