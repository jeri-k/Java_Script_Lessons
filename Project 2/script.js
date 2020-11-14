let numberOfFilm = +prompt("Скільки фільмів ви проглянули", "");

let personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
//--------------------for-----------------------------------------------------
for (let i = 0; i < 2; i++) {
  let m = prompt("Один з перегдянутих фільмів", ""),
    j = prompt("На скільки його оцінете", "");
  if (m != null && j != null && m != "" && j != "" && m.length < 50) {
    personalMovieDB.movies[m] = j;

    console.log("done");
  } else {
    console.log("erro");
    i--
  }
}
//----------------------while-----------------------------------------------
let i=0
while (i < 2) {
  let m = prompt("Один з перегдянутих фільмів", ""),
    j = prompt("На скільки його оцінете", "");
  if (m != null && j != null && m != "" && j != "" && m.length < 50) {
    personalMovieDB.movies[m] = j;

    console.log("done");
  } else {
    console.log("erro");
    i--;
  }
  i++;
}
//----------------------do while----------------------------------------
let i = 0;
do {
  let m = prompt("Один з перегдянутих фільмів", ""),
    j = prompt("На скільки його оцінете", "");
  if (m != null && j != null && m != "" && j != "" && m.length < 50) {
    personalMovieDB.movies[m] = j;

    console.log("done");
  } else {
    console.log("erro");
    i--;
  }
  i++;
} while (i < 2);
//----------------------------------------------------------------------

if (personalMovieDB.count < 10) {
  console.log("Мало Кіно");
} else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
  console.log("Класний зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Кіноман");
} else {
  console.log("Error");
}
console.log(personalMovieDB);
