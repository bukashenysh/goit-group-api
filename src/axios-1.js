import './sass/main.scss';
import axios from 'axios';

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/'

async function fetchMoviesBySearch(urlForSearch, searchValue, localization, pageNumber) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
      query: searchValue,
      page: pageNumber,
    }
  });
  return await axResponse.get(urlForSearch);
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

async function fetchTrendingMovies(urlTrending, localization, pageNumber) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
      page: pageNumber,
    }
  });
  return await axResponse.get(urlTrending);
};

async function genresList(urlWithGenres, localization) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      language: localization,
    }
  });
  return await axResponse.get(urlWithGenres);
};

async function languageList(urlLanguages) {
  const axResponse = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    }
  });
  return await axResponse.get(urlLanguages);
};


fetchMoviesBySearch('search/movie', 'spider man', 'en-US', 3)
fetchMoviesByID('movie/634649', 'en-US');
fetchTrendingMovies('trending/movie/day', 'en-US', 2);
genresList('genre/movie/list', 'en-US');
languageList('configuration/languages');

// https://image.tmdb.org/t/p/w500/dKdcyyHUR5WTMnrbPdYN5y9xPVp.jpg

// Explanation:

// 1. функция fetchMoviesBySearch дает объект {page, results, total_pages, total_results}, 
// для пагинации мы используем { page, total_pages },
// для отрисовки страницы надо забирать results{id, poster_path, original_title(если планируем 
// реализовать локализацию, то надо брать title), genres_ids(список жанров по id с названием находится в функции genresList), 
// release_date(получаем строку в формате YYYY - MM - DD, в дальнейшем надо приводить к формату YYYY)};
// аргументами для функции являются url = "search/movie"("movie" можно заменить на "tv", они разные), "строка поиска", localization, page; 

// 2. функция fetchMoviesByID дает объект где нам надо забрать {poster_path, original_title, overview, vote_avarage, vote_counts,
// popularity, title, genres(или genres.id так как мы все равно будем реализовывать замену id на название)};
// аргументами для функции являются url = "movie/${id = число}"("movie" можно заменить на "tv", они разные), localization;

// 3. функция fetchTrendingMovies дает объект {page, results, total_pages, total_results}, 
// для пагинации мы используем { page, total_pages },
// для отрисовки страницы надо забирать results{id, poster_path, original_title(если планируем 
// реализовать локализацию, то надо брать title), genres_ids(список жанров по id с названием находится в функции genresList), 
// release_date(получаем строку в формате YYYY - MM - DD, в дальнейшем надо приводить к формату YYYY)}
// аргументами для функции являются url = "trending/movie/day"("movie" можно заменить на "tv" или "all", они разные;
// "day" можно заменить на "week"), localization, page; 

// 4. для того, чтобы забрать обложку используем https://image.tmdb.org/t/p/w500/${poster_path}

// 5. функция genresList дает объект {id:00, name:"строка, название жанра"};
// аргументами для функции являются url = "genre/movie/list"("movie" можно заменить на "tv", они разные);

// 6. localization(по умолчанию всегда "en-US" фунция languageList('configuration/languages') дает масивы языков, которые возможны к использованию, но не всегда есть перевод);
// 7. pageNumber(по умолчанию всегда 1), можем принудительно поменять про внесении аргумента в функцию;