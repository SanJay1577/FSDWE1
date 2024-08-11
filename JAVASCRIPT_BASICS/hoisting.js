sayMyName();
sayMyName();
let acc_name = "sanjay";
function sayMyName() {
  let name = "sam";
  console.log("my name is", name);
}

//ARROW FUNCTION
var arr_fn = () => {
  let new_name = "sanjay";
  console.log("Name", new_name);
};
arr_fn();

//anonymous function
let anon_func = function () {
  let new_name = "santhosh";
  console.log("Name", new_name);
};
anon_func();

//IIFE
(function (parm) {
  let value = 5;
  console.log("value:", value + parm);
})(10);

function add_two_num(num1, num2) {
  return num1 + num2;
}
console.log(add_two_num(10, 15));

const arr_addtwo_func = (num1, num2) => num1 + num2;

console.log(arr_addtwo_func(10, 35));

//Scoping
//let and const block scope
//var global

if (true) {
  let abc = "15 value";
  if (true) {
    const bca = "25 value";
    console.log("in second scope", bca);
    if (true) {
      //scope shadow
      const bca = "35 value";
      console.log("in third scope", bca);
    }
  }
}

//JSON //JAVASCRIPT OBJECT NOTATION

const emp_obj = {
  name: "sanjay",
  company: "Guvi",
  role: "Mentor",
  students: ["balaji", "boopathi"],
  class_hours: 3,
  location: {
    state: "TamilNadu",
    city: "Chennai",
  },
  "years-of-experince": 5,
};

//Dot notation
console.log(emp_obj);
console.log(emp_obj.name);
console.log(emp_obj.company);
console.log(emp_obj.role);
console.log(emp_obj.students);
console.log(emp_obj.students[0]);
console.log(emp_obj.class_hours);
console.log(emp_obj.location);
console.log(emp_obj.location.state);
console.log(emp_obj.location.city);

//map notations
console.log(emp_obj["years-of-experince"]);
