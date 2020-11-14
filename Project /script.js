let numberOfFilm = prompt("Скільки фільмів ви проглянули", '');

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let m = prompt("Один з перегдянутих фільмів", ''),
    j = prompt('На скільки його оцінете', '')
personalMovieDB.movies[m] = j;
console.log(personalMovieDB);