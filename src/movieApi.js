import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=934d79fa37e6147b229be794a80c6997

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '934d79fa37e6147b229be794a80c6997';

export const getMovieTrend = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );

    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieSearch = async query => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}`,
      { params: { query: query } }
    );

    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieCast = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );

    return data.cast;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    return data.results;
  } catch (err) {
    console.log(err);
  }
};

//1. fetch('https://api.themoviedb.org/3/trending/movie/day')
//2. fetch('https://api.themoviedb.org/3/search/movie');
//3. fetch('https://api.themoviedb.org/3/movie/movie_id');
//4. fetch('https://api.themoviedb.org/3/movie/movie_id/credits');
//5. fetch(https://api.themoviedb.org/3/movie/{movie_id}/reviews)
