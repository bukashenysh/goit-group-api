import './sass/main.scss';
import axios from 'axios';

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/'

async function fetchMoviesBySearch(url, searchValue, localization, pageNumber) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
      query: searchValue,
      page: pageNumber,
    }
  });
  return await axResponse.get(url);
};

async function fetchMoviesByID(urlWithId, localization) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
    }
  });
  return await axResponse.get(urlWithId);
};

async function fetchTrendingMovies(url, localization, pageNumber) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
      page: pageNumber,
    }
  });
  return await axResponse.get(url);
};

async function genresList(url, localization) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
    }
  });
  return await axResponse.get(url);
};

fetchMoviesBySearch('search/movie', 'spider man', 'en-US', 3)
fetchMoviesByID('movie/634649', 'en-US');
fetchTrendingMovies('trending/movie/day', 'en-US', 2);
genresList('genre/movie/list', 'en-US');

// https://api.themoviedb.org/3/configuration/languages?api_key=${API_KEY};
// https://image.tmdb.org/t/p/w500/dKdcyyHUR5WTMnrbPdYN5y9xPVp.jpg