import './sass/main.scss';

  function fetchMoviesBySearch(searchValue) {
    const API_KEY = '410621b9cfc5cc5268eeae574da75634';
    // const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key='

    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}&page=1`)
      .then(res => res.json())
      .then(data => console.log(data.results[0]))
};

  function fetchMoviesByID(idValue) {
    const API_KEY = '410621b9cfc5cc5268eeae574da75634';
    // const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key='

    return fetch(`https://api.themoviedb.org/3/movie/${idValue}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => console.log(data))
};

  function fetchTrendingMovies() {
    const API_KEY = '410621b9cfc5cc5268eeae574da75634';
    // const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key='

    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=de-DE`)
      .then(res => res.json())
      .then(data => console.log(data))
};

fetchMoviesBySearch('spider man: no way home');
fetchMoviesByID('634649');
fetchTrendingMovies();

// https://api.themoviedb.org/3/list/${genre_ids}?api_key=${API_KEY}&language=en-US
// https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US

// https://api.themoviedb.org/3/configuration/languages?api_key=${API_KEY}