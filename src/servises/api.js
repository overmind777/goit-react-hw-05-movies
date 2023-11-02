import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const api_key = `4903c2e31b478ecf8491741a1e589c49`;

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${api_key}`);
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${api_key}`);
  return data;
};

export const fetchCastById = async id => {
  const { data } = await axios.get(`movie/${id}/credits?api_key=${api_key}`);
  return data.cast;
};

export const fetchReviewsById = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${api_key}`);
  return data.results;
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${api_key}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
