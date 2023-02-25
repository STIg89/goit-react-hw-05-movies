import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = 'e57746b2e4fe98cb5cc839cb405a15f1';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    Notify.failure('Oops...Try again');
    console.log(error);
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length === 0) {
      Notify.warning('Oops...There are no such movies');
    }
    return response.data.results;
  } catch (error) {
    Notify.failure('Oops...Try again');
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notify.failure('Oops...Try again');
    console.log(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (response.data.cast.length === 0) {
      Notify.warning('Oops...There are no casts');
    }
    return response.data.cast;
  } catch (error) {
    Notify.failure('Oops...Try again');
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (response.data.results.length === 0) {
      Notify.warning('Oops...There are no reviews');
    }
    return response.data.results;
  } catch (error) {
    Notify.failure('Oops...Try again');
    console.log(error);
  }
};
