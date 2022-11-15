/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const conversions = [{ type: 'lb', formula: (input) => input * 2.2046 },
{ type: 'g', formula: (input) => input * 1000 },
{ type: 'oz', formula: (input) => input * 35.274 }];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  updateConversions();
})

function updateConversions() {
  deleteConversions();

  const input = getInput();
  if (input === null) {
    alert('Please insert a valid number');
    return;
  }

  const convertedValues = convert(input, conversions);

  renderOutput(convertedValues);
}

function deleteConversions() {
  const output = document.getElementById('output');
  output.innerHTML = '';
}

function getInput() {
  const regexForNumbers = /^\d+(\.\d+)?$/
  const input = document.getElementById('search').value;

  const isNumber = regexForNumbers.test(input);

  if (!isNumber) {
    return null;
  }

  return parseFloat(input);
}

function convert(input, conversions) {
  return conversions.map(conv => {
    const calculated = Math.round(conv.formula(input) * 10000) / 10000;
    return calculated + " " + conv.type;
  });
}

function renderOutput(convertedValues) {
  const output = document.getElementById('output');
  const newList = document.createElement('ul');

  const newElements = convertedValues.map(value => {
    const newListElement = document.createElement('li');
    newListElement.innerText = value;
    newListElement.style.fontSize = "1.1em";
    return newListElement;
  })

  newList.append(...newElements);
  output.appendChild(newList);
}
