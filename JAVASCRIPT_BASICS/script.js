// //alert
// // used to give msg to the user and blocks the next line
// console.log("welcome to guvi");
// alert("Are your approving?");
// console.log("you approved");

// //prompt
// // used to get message as string from user and block the next line
// let name = prompt("what is your name", "Student");
// console.log("welcome", name);

// // confirm
// //used to get message as boolean from user and block the next line
// let flag = confirm("Are you willing to buy the course");
// console.log(flag);
// if (flag == true) {
//   console.log("Thanks for buying the course");
// } else {
//   console.log("We regret to loose you.");
// }

//variables
//variable types
//var is global scoped
var a = 5;
//console.log(a);

var a = 27; //can re initiate
//console.log(a);

//let and const are block scoped
let b = 15;
//console.log(b);
// let b = 20; //not possible to redeclare
b = 28; // re initialization is possible
//console.log(b);

const c = 25;
// const c = 15 //not possible to redeclare
// c = 17; // re initialization is not possible

//variable - username , value = sanjay , datatype - string
let userName = "Sanjay"; // string
let userAge = 25; // number
let isMentor = true; // boolean
let userObj = { name: "sanjay", age: 25, isMentor: true }; // object
let userArr = ["sanjay", 25, true]; // array [object]

console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isMentor, typeof isMentor);
console.log(userObj, typeof userObj);
console.log(userArr, typeof userArr);

// //camel casing
// var guviData
// //elephant casing
// var GUVIDATA
// //_casing
// var guvi_data

//operators
console.log("arithmetci operators");
console.log("add ->", "15 + 15 =", 15 + 15);
console.log("sub ->", "15 - 15 =", 15 - 15);
console.log("mul ->", "15 * 15 =", 15 * 15);
console.log("div ->", "15 / 15 =", 15 / 15);
console.log("reminder ->", "15 % 15 =", 15 % 5);

console.log("logical operator");
let value_left = 15;
let value_right = 20;
console.log("equal to", "15 == 20", value_left == value_right);
console.log("not equal to", "15 != 20", value_left != value_right);
console.log(
  "and equal to",
  "15 = 15 and 20 = 20",
  value_left == 15 && value_right == 20
);
console.log(
  "and equal to",
  "15 = 15 and 20 = 10",
  value_left == 15 && value_right == 10
);
console.log(
  "any one equal to or || ->",
  "15 = 15 and 20 = 10",
  value_left == 15 || value_right == 10
);

console.log(
  "any one equal to or || ->",
  "15 = 20 and 20 = 10",
  value_left == 20 || value_right == 10
);
