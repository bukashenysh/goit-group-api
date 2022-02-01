import './sass/main.scss';
import axios from 'axios';

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const INSTANCE = axios.create({baseURL: BASE_URL, params: {api_key: API_KEY}});

function getApiPromise (type, period) {  
    const url = `trending/${type}/${period}`;
    return INSTANCE.get(url);

}
function getImgUrl (imageName) {
    return BASE_IMAGE_URL + imageName; 
} 
function genresListPromise(type = 'movie', language) {
    const url = `genre/${type}/list`;
    return INSTANCE.get(url, { params: {language}}); 
};

function findGenres (ids, genres) {
    const result = [];
    ids.forEach(id => {
       result.push (genres.filter(generData => generData.id == id)[0].name)
    });
    return result;
}

Promise.all([getApiPromise('movie', 'day'), genresListPromise()]).then(function(data) {
    const filmList = document.getElementsByClassName('film__list');
    const filmItem = document.getElementsByClassName('film__item');
    const filmsInfo = data[0].data.results;
    const filmsGenres = data[1].data.genres;
    filmsInfo.forEach(element => {
        const genresList = findGenres(element['genre_ids'], filmsGenres);
        const item = filmItem[0].cloneNode(true);
        item.classList.remove("hidden_item");
        item.getElementsByClassName('film__img')[0].setAttribute("src", getImgUrl(element.poster_path));
        item.getElementsByClassName('film__name')[0].textContent = element.title;
        item.getElementsByClassName('film__genre_name')[0].textContent = genresList.join(", ");
        item.getElementsByClassName('film__rating')[0].textContent = element.vote_average%1 != 0 ? element.vote_average : element.vote_average + ".0";
        item.getElementsByClassName('film__year')[0].textContent = new Date (element.release_date).getFullYear();
        filmList[0].append(item);
    

    });
    
});