// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result = movies.filter(movie => movie.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(moviesDirector, director) {
  const movies = getMoviesFromDirector(moviesDirector, director);
  const result = movies.reduce((sum, movie) => sum + movie.score, 0);
  const media = result / movies.length;
  console.log("EXERCICE 3 ->", media);
  return result;
}
//moviesAverageOfDirector(movies, 'Sergio Leone');

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const result = movies.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);
  console.log("EXERCICE 4 ->", result);
}
orderAlphabetically(movies);

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
