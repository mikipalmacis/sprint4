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

function moviesAverage(movies){
  const result = movies.reduce((sum, movie) => sum + movie.score, 0);
  return result / movies.length;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(moviesDirector, director) {
  const movies = getMoviesFromDirector(moviesDirector, director);
  const media = moviesAverage(movies);
  console.log("EXERCICE 3 ->", media);
  return media;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const result = movies.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}


// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const result = movies.sort((a, b) => {
    if(a.year < b.year) return -1;
    else if (a.year > b.year) return 1;
    else{
      // Tiene mismo año
      return a.title.localeCompare(b.title);
    }
  }).slice(0, 20);
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, categoria) {
  const result = movies.filter(movie => movie.genre.includes(categoria));
  const media = moviesAverage(result);
  console.log("EXERCICE 6 ->", media.toFixed(2));
  return media.toFixed(2);
}
moviesAverageByCategory(movies, 'Biography');


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
