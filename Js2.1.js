
function greetFriends(name1, name2, name3) {
    console.log("Welcome " + name1 + ", " + name2 + ", " + name3 + ".");
  }
  
  
  function calculateAge(birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age;
  }
  
  
  function greetFriendsWithAges(name1, age1, name2, age2, name3, age3) {
    console.log("Welcome " + name1 + ", you are " + age1 + ".");
    console.log("Welcome " + name2 + ", you are " + age2 + ".");
    console.log("Welcome " + name3 + ", you are " + age3 + ".");
  }
  
  
  var friend1 = "Abhishek";
  var friend2 = "Adarsh";
  var friend3 = "Radha";
  

  greetFriends(friend1, friend2, friend3);
  
  
  var birthYear1 = 1990;
  var birthYear2 = 1985;
  var birthYear3 = 1992;
  
  
  var age1 = calculateAge(birthYear1);
  var age2 = calculateAge(birthYear2);
  var age3 = calculateAge(birthYear3);
  

  greetFriendsWithAges(friend1, age1, friend2, age2, friend3, age3);
  