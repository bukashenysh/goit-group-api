// function fetchCountries(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }
// export default class ServiceApi {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }


// <<------>>
//   async fetchImages() {
//     const axios = require('axios').default;
//     const options = {
//       method: 'get',
//       url: 'https://pixabay.com/api/',
//       params: {
//         key: '25359275-764cc4a5f322ad48333636f40',
//         q: this.searchQuery,
//         image_type: 'photo',
//         per_page: 40,
//         page: this.page,
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     };

//     const serchResult = await axios(options);
//     this.page += 1;
//     return serchResult.data;
//   }
//   resetPage() {
//     this.page = 1;
//    }
//   get query() {
//     return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }


// <<----->>
  function fetchMovies() {
    const API_KEY = '410621b9cfc5cc5268eeae574da75634';
    const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key='

    return fetch(`${BASE_URL}${API_KEY}`)
      .then(res => res.json())
      .then(data => console.log)
  }
fetchMovies();

      //       .then(data =>{
      //   this.page += 1;
      //   return data;
      // });
      // }
      