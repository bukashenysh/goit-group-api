// <<  реализация через Fetch >>


const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/'


function fetchMoviesBySearch(searchValue) {

  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchValue}&language=en-US`)
    .then(res => res.json())
    .then(data => console.log(data))
};

function fetchMoviesByID(idValue) {

  return fetch(`${BASE_URL}movie/${idValue}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => console.log(data))
};

function fetchTrendingMovies() {

  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => console.log(data))
};

function genresList() {

  return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => console.log(data.genres))
};


fetchMoviesBySearch('spider man');
fetchMoviesByID('634649');
fetchTrendingMovies();
genresList();
