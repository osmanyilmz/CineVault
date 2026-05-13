import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
