//functions

//declaring a function
//first citizen
function sum(num1, num2) {
  //num1, num2 -> params
  return num1 + num2;
}

console.log(45, sum(22, 10)); //args
let value_sum = sum(3, 6);
console.log(value_sum);
//while loop
let a = 5;
while (a <= 5) {
  a++; // i = i + 6
  console.log(a); //1 2 3 4 5 6
}

console.log("current a value", a);
let b = 0;

//do while
do {
  b++; // i = i + 1
  console.log(b); //0 1 2 3 4 5
} while (b <= 5);

console.log("current b value", a);

//for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let percentage = 50;
if (percentage >= 90) {
  console.log("Distinction");
} else if (percentage >= 70) {
  console.log("Good");
} else if (percentage >= 40) {
  console.log("Average");
} else {
  console.log("Failed");
}

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please specify day between 1-7");
}

//create a customised calculator

// calculator("rem", 42, 8); //-> result 2
// calculator("add", 5, 8); //-> result 13
// calculator("sub", 8, 2); //-> result 6
// calculator("div", 32, 8); //-> result 4
// calculator("mul", 5, 8); //-> result 40

function calculator(operation, num1, num2) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "div":
      return num1 / num2;
    case "mul":
      return num1 * num2;
    case "rem":
      return num1 % num2;
    default:
      return "please provide valid opertaion [mul,div,sub,add,rem]";
  }
}

const addResult = calculator("add", 10, 35);
const subResult = calculator("sub", 17681, 14672);
const errResult = calculator("err", 17681, 14672);
console.log("result of add", addResult);
console.log("result of sub", subResult);
console.log("result of err", errResult);
