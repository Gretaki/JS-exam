/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

window.addEventListener('load', () => {
  renderCarsCards();
});

async function renderCarsCards() {
  try {
    const cars = await getCars();
    renderOutput(cars);
  } catch (error) {
    alert(error);
  }
}

async function getCars() {
  return fetch(ENDPOINT)
    .then(response => response.json());
}

function renderOutput(cars) {
  deleteOutputElements();
  const output = document.getElementById('output');
  output.style.display = "flex";
  output.style.flexWrap = "wrap";
  output.style.justifyContent = "space-around";

  for (const car of cars) {
    const card = document.createElement('div');
    card.classList.add('card');
    const brand = document.createElement('h3');
    const models = document.createElement('p');
    brand.innerText = car.brand;
    models.innerText = car.models.join(", ");

    card.append(brand, models);
    output.appendChild(card);
  }
}

function deleteOutputElements() {
  const outputChildren = document.querySelectorAll('#output > *');
  outputChildren.forEach(child => child.remove());
}
