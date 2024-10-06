//create an element in document
const ele = document.createElement("div");
//set attribute
ele.setAttribute("class", "dom");
ele.setAttribute("id", "main-div");
console.log(ele);
ele.innerText = "From JS";
//small task
// create an anchor tag with href and target attribute
const a_tag = document.createElement("a");
a_tag.setAttribute("href", "https://google.com");
a_tag.setAttribute("target", "_blank");
console.log(a_tag);
a_tag.innerText = "Google";

// Element by ID
const mainHead = document.getElementById("main-head");
console.log(mainHead);
const sideHead = document.getElementById("side-head");
console.log(sideHead);

//element by classnames
const gHead = document.getElementsByClassName("g-head");
console.log(gHead); // result in an array

//querySelector
//query selector selectes the first element of the selector
//ele=$ele, id=#$id, class=.$classname
//tag = document.querySelector("h1");
//class = document.querySelector(".ghead");
//id = document.querySelector("#main-head");
// if no element (null)
const queryTag = document.querySelector("h1");
console.log("h1 element", queryTag);

//query selector all
//gets all data in an array
//ele=$ele, id=#$id, class=.$classname
//tag = document.querySelector("h1");
//class = document.querySelector(".ghead");
//id = document.querySelector("#main-head");
//if no element (empty array -> [])
const queryAllEle = document.querySelectorAll("#main-head");
console.log(queryAllEle);

//add changes to the element (accessing style)
function makeElementRed(ele) {
  const selectedEle = document.querySelectorAll(`${ele}`);
  for (let i = 0; i < selectedEle.length; i++) {
    selectedEle[i].style.color = "red";
  }
}
makeElementRed("h1");

const domDiv = document.querySelector("#dom-div");
// domDiv.innerText = "Hello  hi there";
// domDiv.innerHTML = `
// <h1>Heading inside DOM</h1>
// `;
console.log(domDiv);

//append and append child property

//append multiple elements
//will not return any data
// const appendedData = domDiv.append(ele, a_tag);
// console.log(appendedData);

//only append one element can be appended
// it will return the exact element appened
const appendChildData = domDiv.appendChild(ele);
console.log(appendChildData);

// console.log(queryTag.style);

//task style all h1 tag.

// //Sample logic to get all id in the document (not needed);
// function getAllIdData(arrId) {
//   arrId.map((data) => {
//     let lookup = document.querySelectorAll(`#${data}`);
//     console.log(lookup);
//   });
// }
// const arrId = ["main-head", "side-head"];
// getAllIdData(arrId);
