var userName;
var fullName;
var firstName;
var lastName;
var age;
var meal;
// let  void
firstName = "Omar";
lastName = "Faruk";
fullName = "Omar Faruk";
age = 21;
meal = true;
userName = firstName.concat(' ').concat(lastName);
var l = fullName.split(' ');
var output = { userName: userName, age: age, meal: meal, l: l };
console.log(output);
