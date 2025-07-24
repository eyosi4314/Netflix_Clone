import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// const BASE_URL = "https://api.themoviedb.org/3";
// fetch(`${BASE_URL}${requests.fetchTrending}`);

export default instance;