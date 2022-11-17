/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    // daugiau nei 100 000 000 mln USD
    return this.budget > 1E14;
  }

}

const cheapMovie = new Movie("This is Title", "This is Director", 10);
const wasCheapMovieExpensive = cheapMovie.wasExpensive();
console.log(wasCheapMovieExpensive);

const expensiveMovie = new Movie("This is Title2", "This is Director2", 100000000000001);
const wasExpensiveMovieExpensive = expensiveMovie.wasExpensive();
console.log(wasExpensiveMovieExpensive);
