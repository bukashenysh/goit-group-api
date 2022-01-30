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
// аргументами для функции являются "id = число", "type"(по умолчанию "movie" можно заменить на "tv"), "language = en-US";

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
