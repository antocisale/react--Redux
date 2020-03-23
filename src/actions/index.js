//action types - screen grab movies, search, load more movies

//urls de las apis que estan en config
import {API_URL,API_KEY} from '../config';

// action types for Home 


export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';

// action para el loading spinner en Home y en Movie

export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';

//action creators que usamos en el dispatch y en el reducer


//action creators for HOME

export const getPopularMovies = ()=>{
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const request = fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            return result;
        })
        .catch(error => console.error('Error:', error))

    return {
        type: GET_POPULAR_MOVIES,
        payload: request //tiene todas las movies que pedimos a la API
    }
};

export const searchMovies = (searchTerm)=>{
    let endpoint = '';

    if (!searchTerm) {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }

    const request = fetch(endpoint)
    .then(result => result.json())
    .then(result => {
        return {...result, seachTerm};
    })
    .catch(error => console.error('Error:', error))

    return {
        type: SEARCH_MOVIES,
        payload: request //tiene todas las movies que pedimos a la API
    }
};

export const loadMoreMovies = (searchTerm, currentPage)=>{
    let endpoint = '';

    if (!searchTerm) {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
    }

    const request = fetch(endpoint)
    .then(result => result.json())
    .then(result => {
        return result;
    })
    .catch(error => console.error('Error:', error))

    return {
        type: LOAD_MORE_MOVIES,
        payload: request //tiene todas las movies que pedimos a la API
    }
};

export const clearMovies = ()=>{
    return {
        type: CLEAR_MOVIES,
        payload: null
    }
}

export const showLoadingSpinner = ()=>{
    return{
        type: SHOW_LOADING_SPINNER,
        payload: null
    }
}