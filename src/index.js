// Your code here

const filmsUrl = "https://whispering-castle-08564.herokuapp.com/films";

//Fetch fist movie details
function fetchFirstMovie (id) {
    fetch(`${filmsUrl}/${id}`)
    .then(response => response.json())
    .then(movie => {
        document.getElementById("poster").src = movie.poster;

        document.getElementById("title").innerHTML = movie.title;

        document.getElementById("runtime").innerHTML = movie.runtime;

        document.getElementById("film-info").innerHTML = movie.description;

        document.getElementById("showtime").innerHTML = movie.showtime;

        document.getElementById("ticket-num").innerHTML = movie.capacity - movie.tickets_sold;
    })
}

//Fetch movie titles
function fetchMovieTitles () {
    return fetch(`${filmsUrl}`)
    .then(response => response.json())
    //.then(data => console.log(data));
}

//Display movie titles
function renderMovieTitles (movieTitles) {
    const movieList = document.getElementById("films");
    const movies = document.createElement("li");
    movies.innerHTML = movieTitles.title.toUpperCase();

    movieList.appendChild(movies);
}

fetchMovieTitles().then(movies => {
    movies.forEach(movie => {
        renderMovieTitles(movie);
    })
})

document.addEventListener("DOMContentLoaded", function () {
    fetchFirstMovie(1);
    fetchMovieTitles();
})