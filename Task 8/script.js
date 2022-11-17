/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

  this.sum = function (numberA, numberB) {
    return numberA + numberB;
  };

  this.subtraction = function (numberA, numberB) {
    return numberA - numberB;
  };

  this.multiplication = function (numberA, numberB) {
    return numberA * numberB;
  };

  this.division = function (numberA, numberB) {
    if (numberB === 0) throw new Error("Cannot divide by zero");
    
    return numberA / numberB;
  };
}

const calculator = new Calculator();
const sum = calculator.sum(2, 3);
const subtraction = calculator.subtraction(2, 3);
const multiplication = calculator.multiplication(2, 3);
const division = calculator.division(2, 3);

console.log(sum);
console.log(subtraction);
console.log(multiplication);
console.log(division);
