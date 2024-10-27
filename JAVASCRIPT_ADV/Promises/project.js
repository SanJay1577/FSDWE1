//fetch api

function createCardComponent(country) {
  document.querySelector("#main").innerHTML += `
     <div class="container">
     <img id="flag" src="${country.flags.png}" alt="flagimage"/>
     <div class="information">
     <h2>${country.name.common}</h2>
     <p> <span>Population : </span>${country.population}</p>
     <p> <span>Capital : </span>${country.capital[0]}</p>
     <p> <span>Region: </span>${country.region}</p>
     </div>
     </div>
     `;
}

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.message) {
//       console.log("Error Message: ", data.message);
//     } else {
//       data.map((country, idx) => {
//         createCardComponent(country);
//       });
//     }
//   })
//   .catch((err) => {
//     console.log("Error occured", err.message);
//   })
//   .finally(() => {
//     console.log("finally all operations are done");
//   });

//async and await
async function showAllCountries() {
  try {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    if (data.message) {
      console.log("Error Message: ", data.message);
    } else {
      data.map((country) => {
        createCardComponent(country);
      });
    }
  } catch (error) {
    console.log("Error occured", error);
  }
}
showAllCountries();
