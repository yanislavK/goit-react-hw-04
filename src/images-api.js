import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "bKfp-C2zu_4Lbq-v9HOOirZwfqw8vupnQzbj1hdJYgY";

export const fetchImagesBySearch = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(
    `${API_URL}?query=${query}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`
  );
  return response.data.results;
};
