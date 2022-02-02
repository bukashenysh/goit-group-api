import ServiceApi from './newFile';

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/';

const api = new ServiceApi();
// api.getGenresList('uk');
// api.getGenresList('en-US');
// console.log(api);

// import './sass/main.scss';
// import axios from 'axios';

// const API_KEY = '410621b9cfc5cc5268eeae574da75634';
// const BASE_URL = 'https://api.themoviedb.org/3/';

const refs = {
  btnOne: document.querySelector('.btn1'),
  btnThree: document.querySelector('.btn3'),
  btnSeven: document.querySelector('.btn7'),
  btnHome: document.querySelector('.btnHome'),
  btnSearch: document.querySelector('.btnSearch'),
  btnSmthng: document.querySelector('.btnSmthng'),
  btnSmthng2: document.querySelector('.btnSmthng2'),
};

refs.btnOne.addEventListener('click', () => {
  api.fetchTrending({ page: 1, period: 'day' });
  console.log(api);
});
refs.btnThree.addEventListener('click', () => {
  console.log(api.fetchTrending({ page: 3, period: 'day' }));
});
refs.btnSeven.addEventListener('click', () => {
  api.fetchTrending({ page: 7, period: 'day' });
  console.log(api);
});
refs.btnHome.addEventListener('click', () => {
  console.clear();
  api.fetchTrending({});
  console.log(api);
});
refs.btnSearch.addEventListener('click', () => {
  console.clear();
  api.fetchMoviesBySearch({ query: 'spider man' });
  console.log(api);
});
refs.btnSmthng.addEventListener('click', () => {
  console.clear();
  api.fetchMoviesBySearch({ query: 'spider man', page: 4 });
  console.log(api);
});
refs.btnSmthng2.addEventListener('click', () => {});

// refs.btnOne.addEventListener('click', () => {
// //   console.clear()
// //   api.stranica = 1
// //   api.fetchTrendingMovies().then(data => {
// //     data.map(({ id, title, vote_average, poster_path, genre_ids, release_date, overview, vote_count }) => {
// //       console.log(id);
// //       console.log(title);
// //       console.log(genre_ids);
// //       console.log(`https://image.tmdb.org/t/p/w500${poster_path}`);
// //       console.log(release_date.slice(0, 4));
// //       console.log(overview);
// //       console.log(vote_average);
// //       console.log(vote_count);
// //     }
// //   )})
// // })

// // refs.btnThree.addEventListener('click', () => {
// //     console.clear()
// //   api.stranica = 3
// // api.fetchTrendingMovies().then(data => {
// //   data.results.map(({ id, title, vote_average, poster_path, genre_ids, release_date, overview, vote_count }) => {
// //       console.log(id);
// //       console.log(title);
// //       console.log(genre_ids);
// //       console.log(`https://image.tmdb.org/t/p/w500${poster_path}`);
// //       console.log(release_date.slice(0, 4));
// //       console.log(overview);
// //       console.log(vote_average);
// //       console.log(vote_count);
// //     }
// //   )})
// // })

// // refs.btnSeven.addEventListener('click', () => {
// //   console.clear()
// //   console.log(api.arrayForGenres)
// //   console.log(api.arrayForFilms)
// // })

// const axInstance = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: API_KEY,
//   }
// });

// class ServiceApi {
//  constructor() {
//   this.searchQuery = '';
//   this.page = 1;
//   this.arrayForGenres = [];
//   this.arrayForFilms = [];
//   }

// async fetchTrendingMovies(page = this.page, period = 'day', language) {
// const url = `trending/movie/${period}`;
//   if (this.arrayForGenres.length === 0) { await this.genresList() }
//   const response = await axInstance.get(url, { params: { page, language } });
//   this.arrayForFilms = response.data.results.map(({ id, title, vote_average, poster_path, genre_ids, release_date, overview, vote_count }) => ({ id, title, vote_average, image:`https://image.tmdb.org/t/p/w500${poster_path}`, genre_ids, short_date : release_date.slice(0, 4), overview, vote_count, genres: this.arrayForGenres.filter((genre) => (genre_ids.includes(genre.id))).map(({ name }) => (name)) }));
// return this.arrayForFilms;
// }

// async genresList(language) {
// const url = `genre/movie/list`;
// const response = await axInstance.get(url, { params: {language}});
//   this.arrayForGenres = response.data.genres;
//   return this.arrayForGenres
// }

// get stranica() {
// return this.page;
// }

// set stranica(newPage) {
// this.page = newPage;
// }

// resetPage() {
// this.page = 1;
// }

// get query() {
// return this.searchQuery;
// }

// set query(newQuery) {
// this.searchQuery = newQuery;
// }

// };

// const api = new ServiceApi()
// // api.genresList().then(data => {
// //   api.this.arrayForSave = data.genres
// // })
// // api.genresList()
// // api.stranica = 6;
// // const prom = api.fetchTrendingMovies();

// // console.log(api.stranica);
// // prom.then(data => {console.log(data)})

// // async function genresList(language) {
// //   const url = `genre/movie/list`;
// //   const response = await axInstance.get(url, { params: {language}});
// //   return response.data;
// // };

// // genresList()
// async function blabla() {
//   await api.fetchTrendingMovies()
//   console.log(api.arrayForGenres)
//   console.log(api.arrayForFilms)
// };

// blabla()
