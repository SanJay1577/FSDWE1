// const sampleArr = [10, "sanjay", true, { name: "guvi" }, ["BWE"]];
// const arr = [];
// console.log(arr, typeof arr);
// const arr2 = new Array();
// console.log(arr2, typeof arr2);

// array methods (sort)
const arr = [5, 4, 2, 6, 9, 1, 11];
arr.sort((a, b) => a - b);
console.log(arr);
arr.reverse(); // reverse an array
console.log(arr);

///push
const arr_access = [1, 3, 5, 7, 9];
arr_access.push(10, 11, 12);
console.log("push", arr_access);

arr_access.pop();
console.log("pop", arr_access);

arr_access.unshift(0);
console.log("unshift", arr_access);

arr_access.shift();
console.log("shift", arr_access);

const sliced_arr = arr_access.slice(0, 4);
console.log("original arr", arr_access);
console.log("slice arr", sliced_arr);

arr_access.splice(1, 3, 43);
// (start, deletion_count, addnew_data , ....)
console.log("spliced original arr", arr_access);

let a = 15;
let b = a;
b = 16;
console.log(b);
console.log(a);
// copy reference
let some_arr_1 = [2, 3];
let some_arr_2 = some_arr_1;
// if we wanted in copy by value -> let some_arr_2 = [...some_arr_1];
some_arr_2[0] = 5;
console.log(some_arr_1);
console.log(some_arr_2);

//MRF (map, filter, reduce)
let mrf = [2, 4, 6, 8, 10];

let newMrf = mrf.map((v, index, accArr) => {
  console.log("value : ", v);
  console.log("index : ", index);
  console.log("accArr : ", accArr);
  return v * 2;
});
console.log(newMrf);

let fil_newmrf = newMrf.filter((v, index, accArr) => {
  console.log("value : ", v);
  console.log("index : ", index);
  console.log("accArr : ", accArr);
  return v != 4;
});
console.log(fil_newmrf);

let result = fil_newmrf.reduce((acc, v, index, accArr) => {
  console.log("value : ", v);
  console.log("index : ", index);
  console.log("accArr : ", accArr);
  return (acc += v);
}, 10);
console.log(result);

const performanceList = [64, 18, 82, 23, 54];
// add partical marks 10 , passed total;
//chaining
const result_data = performanceList
  .map((val) => val + 10)
  .filter((val) => val >= 40)
  .reduce((acc, val) => {
    return (acc += val);
  }, 0);
console.log(result_data);
// total failure or average mark of failure

const failure_result = performanceList
  .map((val) => val + 10)
  .filter((val) => val < 40)
  .reduce(
    (acc, val) => {
      total_failure = acc[0]++;
      acc[1] += val;
      acc[1] = acc[1] / acc[0];
      return acc;
    },
    [0, 0]
  );
console.log("failure_result", failure_result);

const student_obj = {
  name: "Sanjay",
  getMyName() {
    console.log(this);
  },
};

student_obj.getMyName();

console.log(arr);

Array.prototype.zenMap = function (fn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(fn(this[i], i, this));
  }
  return temp;
};

const mapped = arr.map((val, index, acc_Arr) => {
  console.log(`
     Value : ${val} 
     Index : ${index}
     Acctual Arr : ${acc_Arr}
    `);
  return val * 3;
});
console.log("mapped", mapped);

const zen_mapped = arr.zenMap((val, index, acc_Arr) => {
  console.log(`
    Value : ${val} 
    Index : ${index}
    Acctual Arr : ${acc_Arr}
   `);
  return val * 3;
});
console.log("zen mapped", zen_mapped);
