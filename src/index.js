import './sass/main.scss';
import axios from 'axios';

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/';

const axInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  }
});

async function fetchMoviesBySearch(query, page, language, type = 'movie' ) {
  const url = `search/${type}`;
  const response = await axInstance.get(url, { params: { query, language, page } });
  return response.data;
};

async function fetchMoviesById(id, type = 'movie', language) {
  const url = `${type}/${id}`;
  const response = await axInstance.get(url, { params: {language}});
  return response.data;
};

async function fetchTrendingMovies(page, type = 'movie', period = 'day', language) {
  const url = `trending/${type}/${period}`;
  const response = await axInstance.get(url, { params: {page, language}});
  return response.data;
};

async function genresList(type = 'movie', language) {
  const url = `genre/${type}/list`;
  const response = await axInstance.get(url, { params: {language}});
  return response.data;
};

async function languageList() {
  const url = `configuration/languages`;
  const response = await axInstance.get(url);
  return response.data;
};

fetchMoviesBySearch('spider man').then(data => console.log(data));
fetchMoviesById(634649).then(data => console.log(data));
fetchTrendingMovies().then(data => console.log(data));
genresList().then(data => console.log(data.genres));
languageList().then(data => console.log(data));