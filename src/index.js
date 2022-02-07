import ServiceApi from './serviceApiTMDB';

const api = new ServiceApi();

const refs = {
  btnOne: document.querySelector('.btn1'),
  btnThree: document.querySelector('.btn3'),
  btnSeven: document.querySelector('.btn7'),
  btnHome: document.querySelector('.btnHome'),
  btnSearch: document.querySelector('.btnSearch'),
  btnSmthng: document.querySelector('.btnSmthng'),
  btnSmthng2: document.querySelector('.btnSmthng2'),
  form: document.querySelector('.search-form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('hi');
  const query = e.currentTarget.elements.searchQuery.value;
  // api.fetchMoviesBySearch({ query });
  console.log(api.arrayForFilms);
  console.log(api.fetchMoviesBySearch({ query }));
});

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
