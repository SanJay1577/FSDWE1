let btn = document.getElementById("btn");
let inp_ele = document.getElementById("input-ele");
let eventOutput = document.getElementById("output");
let keyOutput = document.getElementById("key-output");
let t_input = document.getElementById("password-input");
let t_btn = document.getElementById("password-btn");
let c_input = document.getElementById("conf-input");
let c_para = document.getElementById("conf-para");
let c_btn = document.getElementById("conf-btn");
let counter = 0;
let isPassword = true;

//  addEventListener
btn.addEventListener("click", () => {
  counter++; //4
  eventOutput.innerText = `Button Clicked ${counter}`;
  eventOutput.style.color = "green";
});

btn.addEventListener("mouseover", () => {
  eventOutput.innerText = "mouse is hovered";
  eventOutput.style.color = "red";
  btn.style.cursor = "pointer";
});

inp_ele.addEventListener("input", () => {
  eventOutput.innerText = inp_ele.value;
});

document.addEventListener("keydown", (event) => {
  keyOutput.innerText = `you pressed ${event.key}`;
});

function stateTooggle() {
  isPassword = !isPassword;
}

function hidePassword() {
  t_btn.innerText = "Show";
  t_input.type = "password";
}

function showPassword() {
  t_btn.innerText = "Hide";
  t_input.type = "text";
}

t_btn.addEventListener("click", () => {
  stateTooggle();
  isPassword ? hidePassword() : showPassword();
});

function matchedPasswordLogic() {
  c_para.style.color = "green";
  c_para.innerText = "password matched";
  c_btn.disabled = false;
}

function nonMatchedPasswordLogic() {
  c_para.innerText = "password incorrect";
  c_para.style.color = "red";
  c_btn.disabled = true;
}

c_input.addEventListener("input", (e) => {
  if (t_input.value == c_input.value) {
    return matchedPasswordLogic();
  }
  return nonMatchedPasswordLogic();
});
