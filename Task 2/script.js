/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const state = {
  counter: 0,
};

const buttonElement = document.getElementById('btn__element');
const buttonStateElement = document.getElementById('btn__state');

buttonElement.addEventListener('click', () => {
  state.counter += 1;
  buttonStateElement.innerText = state.counter;
});
