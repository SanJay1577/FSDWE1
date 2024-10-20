//event bubbling and propagation
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const c_counter = document.getElementById("counter");

let counterFn = outeFunction(); //innerFunction = outerFunction()
parent.addEventListener("click", () => {
  alert("parent clicked");
});
//event bubbling
child.addEventListener("click", (event) => {
  //stopping the propagation effects
  event.stopPropagation();
  counterFn();
});

//clousres
function outeFunction() {
  let count = 0;
  return function innerFunction() {
    count++; //1
    c_counter.innerText = count;
  };
}
//curring (JS)
//outeFunction() //outeFunction() = innerFunction
outeFunction()(); //outeFunction()() = innerFunction()
//sum(3)(5)(6)() //task

function sum(num1) {
  //14
  return function (num2) {
    //
    if (num2) return sum(num1 + num2);
    return num1;
  };
}
console.log(sum(1)(2)(5)(6)()); //

function createButtonVariants(style) {
  return function (color) {
    if (!color) {
      color = "blue";
    }
    return function (text) {
      const button = document.createElement("button");
      button.className = style;
      button.style.backgroundColor = color;
      button.innerText = text;
      return button;
    };
  };
}
let dangerLarge = createButtonVariants("large")("crimson")("Delete");
let dangersmall = createButtonVariants("small")("crimson")("Del");
let acceptsmall = createButtonVariants("small")("teal")("acc");
let acceptLarge = createButtonVariants("large")("teal")("acc");
let defaultLarge = createButtonVariants("large")("")("acc");
document.body.appendChild(dangerLarge);
document.body.appendChild(dangersmall);
document.body.appendChild(acceptsmall);
document.body.appendChild(acceptLarge);
document.body.appendChild(defaultLarge);
