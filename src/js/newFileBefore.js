import axios from 'axios';

export default class ServiceApi {
  constructor() {
    this.API_KEY = '410621b9cfc5cc5268eeae574da75634';
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.axInstance = axios.create({
      baseURL: this.BASE_URL,
      params: {
        api_key: this.API_KEY,
      },
    });
    this.page = 1;
    this.arrayForGenresUk = [];
    this.arrayForGenresEn = [];
    this.getGenresListUk('uk');
    this.getGenresListEn('en-US');
    // this.arrayForFilmsEn = [];
    // this.arrayForFilmsUk = [];
    this.arrayForFilms = [];
    this.totalPages = null;
    // this.fetchTrending();
    // this.fetchMoviesBySearch('spider man');
    // this.fetchTrendingMoviesEn();
    // this.fetchTrendingMoviesUk(1, 'day', 'uk';
  }
  async getGenresListUk(language) {
    const url = `genre/movie/list`;
    const response = await this.axInstance.get(url, { params: { language } });
    this.arrayForGenresUk = response.data.genres;
    return this.arrayForGenres;
  }
  async getGenresListEn(language) {
    const url = `genre/movie/list`;
    const response = await this.axInstance.get(url, { params: { language } });
    this.arrayForGenresEn = response.data.genres;
    return this.arrayForGenres;
  }
  // async fetchTrendingMoviesEn(page = this.page, period = 'day', language) {
  //   const url = `trending/movie/${period}`;
  //   const response = await this.axInstance.get(url, { params: { page, language } });
  //   this.arrayForFilms = response.data.results.map(
  //     ({
  //       id,
  //       title,
  //       vote_average,
  //       poster_path,
  //       genre_ids,
  //       release_date,
  //       overview,
  //       vote_count,
  //     }) => ({
  //       id,
  //       titleEn: title,
  //       vote: String(vote_average).replaceAll('.', ','),
  //       imageEn: `https://image.tmdb.org/t/p/w500${poster_path}`,
  //       reliseData: release_date.slice(0, 4),
  //       aboutEn: overview,
  //       votes: vote_count,
  //       genreEn: this.arrayForGenresEn
  //         .filter(genre => genre_ids.includes(genre.id))
  //         .map(({ name }) => name),
  //     }),
  //   );
  //   return;
  // }
  // async fetchTrendingMoviesUk(page = this.page, period = 'day', language, array) {
  //   const url = `trending/movie/${period}`;
  //   const response = await this.axInstance.get(url, { params: { page, language } });
  //   //
  //   const data = response.data.results.map(
  //     ({ title, poster_path, genre_ids, overview }, array) => ({
  //       titleEn: array.titleEn,
  //       titleUk: title,
  //       imageUk: `https://image.tmdb.org/t/p/w500${poster_path}`,
  //       aboutUk: overview,
  //       genreUk: this.arrayForGenresUk
  //         .filter(genre => genre_ids.includes(genre.id))
  //         .map(({ name }) => name),
  //     }),
  //   );
  //   this.arrayForFilms = [...data];
  //   return;
  // }
  async fetchTrending({ page = 1, period = 'day', language }) {
    this.stranica = page;
    const url = `trending/movie/${period}`;
    const responseEn = await this.axInstance.get(url, { params: { page: this.page } });
    // можно вынести в отдельный метод
    this.totalPages = responseEn.data.total_pages;
    const dataEn = responseEn.data.results.map(
      ({
        id,
        title,
        vote_average,
        poster_path,
        genre_ids,
        release_date,
        overview,
        vote_count,
      }) => ({
        id,
        titleEn: title,
        vote: String(vote_average).replaceAll('.', ','),
        imageEn: `https://image.tmdb.org/t/p/w500${poster_path}`,
        reliseData: release_date.slice(0, 4),
        aboutEn: overview,
        votes: vote_count,
        genreEn: this.arrayForGenresEn
          .filter(genre => genre_ids.includes(genre.id))
          .map(({ name }) => name),
      }),
    );
    const responseUk = await this.axInstance.get(url, { params: { page, language: 'uk' } });
    // можно вынести в отдельный метод
    const data = responseUk.data.results.map(
      ({ title, poster_path, genre_ids, overview }, index) => ({
        titleEn: dataEn[index].titleEn,
        id: dataEn[index].id,
        vote: dataEn[index].vote,
        imageEn: dataEn[index].imageEn,
        reliseData: dataEn[index].reliseData,
        votes: dataEn[index].votes,
        genreEn: dataEn[index].genreEn,
        titleUk: title,
        imageUk: `https://image.tmdb.org/t/p/w500${poster_path}`,
        aboutUk: overview,
        aboutEn: dataEn[index].aboutEn,
        genreUk: this.arrayForGenresUk
          .filter(genre => genre_ids.includes(genre.id))
          .map(({ name }) => name),
      }),
    );
    this.arrayForFilms = [...data];
    return { films: this.arrayForFilms, totalPages: this.totalPages };
  }
  async fetchMoviesBySearch({ query, page = 1, language }) {
    this.stranica = page;
    const url = `search/movie`;
    const responseEn = await this.axInstance.get(url, {
      params: { query, page: this.page, language },
    });
    // можно вынести в отдельный метод
    this.totalPages = responseEn.data.total_pages;
    const dataEn = responseEn.data.results.map(
      ({
        id,
        title,
        vote_average,
        poster_path,
        genre_ids,
        release_date,
        overview,
        vote_count,
      }) => ({
        id,
        titleEn: title,
        vote: String(vote_average).replaceAll('.', ','),
        imageEn: `https://image.tmdb.org/t/p/w500${poster_path}`,
        reliseData: release_date.slice(0, 4),
        aboutEn: overview,
        votes: vote_count,
        genreEn: this.arrayForGenresEn
          .filter(genre => genre_ids.includes(genre.id))
          .map(({ name }) => name),
      }),
    );
    const responseUk = await this.axInstance.get(url, { params: { query, page, language: 'uk' } });
    // можно вынести в отдельный метод
    const data = responseUk.data.results.map(
      ({ title, poster_path, genre_ids, overview }, index) => ({
        titleEn: dataEn[index].titleEn,
        id: dataEn[index].id,
        vote: dataEn[index].vote,
        imageEn: dataEn[index].imageEn,
        reliseData: dataEn[index].reliseData,
        votes: dataEn[index].votes,
        genreEn: dataEn[index].genreEn,
        titleUk: title,
        imageUk: `https://image.tmdb.org/t/p/w500${poster_path}`,
        aboutUk: overview,
        aboutEn: dataEn[index].aboutEn,
        genreUk: this.arrayForGenresUk
          .filter(genre => genre_ids.includes(genre.id))
          .map(({ name }) => name),
      }),
    );
    this.arrayForFilms = [...data];
    return;
  }
  get stranica() {
    return this.page;
  }
  set stranica(newPage) {
    this.page = newPage;
  }
  getFilmById(id = null) {
    console.log(id);
    if (!id) {
      return 'Error';
    }
    const filmIndex = this.arrayForFilms.map(film => {
      return film.id;
    });

    if (filmIndex === -1) {
      console.log('no film');
      return 'Error';
    }
    return this.arrayForFilms[filmIndex];
  }
}
