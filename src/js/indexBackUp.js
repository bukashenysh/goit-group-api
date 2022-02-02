import './sass/main.scss';
import axios from 'axios';

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/';

// локолизация (language 'en-US' & 'uk')

const axInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  }
});

async function genresList(language) {
  const url = `genre/movie/list`;
  const response = await axInstance.get(url, { params: {language}});
  return response.data;
};

async function fetchMoviesBySearch(query, page, language ) {
  const url = `search/movie`;
  const response = await axInstance.get(url, { params: { query, language, page } });
  return response.data;
};

async function fetchTrendingMovies(page, period = 'day', language) {
  const url = `trending/movie/${period}`;
  const response = await axInstance.get(url, { params: {page, language}});
  return response.data;
};

// async function fetchMoviesById(id, language) {
//   const url = `movie/${id}`;
//   const response = await axInstance.get(url, { params: {language}});
//   return response.data;
// };

// async function languageList() {
//   const url = `configuration/languages`;
//   const response = await axInstance.get(url);
//   return response.data;
// };

genresList().then(data => console.log(data.genres));
fetchTrendingMovies().then(data => console.log(data));
fetchMoviesBySearch('spider man').then(data => console.log(data));
// fetchMoviesById(634649).then(data => console.log(data));
// languageList().then(data => console.log(data));