const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/';

const axInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  }
});

class ServiceApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.hits = null;

  }
  async fetchTrendingMovies(page = 1, period = 'day', language = 'en-US') {
  const url = `trending/movie/${period}`;
  const response = await axInstance.get(url, { params: {page, language}});
  return response.data;
};
  async fetchImages() {
    const axios = require('axios').default;
    const options = {
      method: 'get',
      url: 'https://pixabay.com/api/',
      params: {
        key: '25359275-764cc4a5f322ad48333636f40',
        q: this.searchQuery,
        image_type: 'photo',
        per_page: 40,
        page: this.page,
        orientation: 'horizontal',
        safesearch: true,
      },
    };

    const searchResult = await axios(options);
    // this.incrementHits();
    this.incrementPage();
    return searchResult.data;
  }
  // incrementHits() {
  //   this.hits = this.page * 40;
  // }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
   }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

  // resetSerch(tag) {
  //   this.page = 1;
  //   this.hits = null;
  //   this.searchQuerry = querry;?
  // }