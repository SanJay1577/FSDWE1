const logger = (params) => console.log(params);
logger("......promise.all settled");
let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved promise 1");
  }, 2000);
});

let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("rejceted promise 2");
  }, 3000);
});

let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved promise 3");
  }, 4000);
});

// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.allSettled([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function setLocalStorage() {
  localStorage.setItem("token", "6725713ghuasgdusaDB782J");
}

setLocalStorage();

function getLocalStorage() {
  return localStorage.getItem("token");
}

function removeLocalStorage() {
  localStorage.removeItem("token");
}

console.log(getLocalStorage());

removeLocalStorage();

const userData = [
  {
    username: "sanjay",
    password: "Password@123",
    role: "general",
  },
  {
    username: "admin",
    password: "Admin@123",
    role: "admin",
  },
];

function storeInitialUserData() {
  localStorage.setItem("userdata", JSON.stringify(userData));
}
storeInitialUserData();

function getAllUserDetails() {
  return localStorage.getItem("userdata");
}

let mainContainer = document.getElementById("container");

mainContainer.innerHTML = `
<div class="login-form">
<input placeholder="Enter Username"  type="text" id="name-inp"/>
<input placeholder="Enter password" type="password" id="pass-inp"/>
<button id="login-btn">Login</button>
 <div id="mes"></div>
</div>
`;

document.getElementById("login-btn").addEventListener("click", () => {
  const allUserData = JSON.parse(getAllUserDetails());
  let username = document.getElementById("name-inp").value;
  let password = document.getElementById("pass-inp").value;
  if (username && password) {
    let user = allUserData.find((user) => user.username === username);
    if (!user) {
      document.getElementById("mes").innerText = "No user exist";
      document.getElementById("mes").style.color = "crimson";
      return;
    }
    if (user.password !== password) {
      document.getElementById("mes").innerText = "invaid user credentials";
      document.getElementById("mes").style.color = "crimson";
      return;
    }
    document.getElementById("mes").innerText = "";
    localStorage.setItem("role", user.role);
  }
});

document.body.appendChild(mainContainer);

//login form
//2 input username and password
// <div>Welcome username</div>
// local -> role : "userrole"

class Vechicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getVechicleName() {
    console.log(`Vokswagon ${this.name}`);
  }
}

class VechiclePower extends Vechicle {
  constructor(name, type, engine) {
    super(name, type);
    this.engine = engine;
  }
}
// encapsulation, polymorphism, abstarction, inheritance
const virtus = new Vechicle("virtus", "sedan");
const tigun = new Vechicle("tigun", "SUV");
const tiguan = new Vechicle("tiguan", "SUV");
const passat = new VechiclePower("passat", "sedan", "4 cylinder");

console.log(virtus);
virtus.getVechicleName();
console.log(passat);
passat.getVechicleName();
