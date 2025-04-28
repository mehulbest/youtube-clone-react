import axios from 'axios';


// Example using Pexels Videos API (you can change)
const API_KEY = 'hDDsjVGL5kdJogxxGOPlwiitKoiGvIxsjbwfiLpEgS0cxi13QtDni66W';  // replace with real API key

const instance = axios.create({
    baseURL: "https://api.pexels.com/videos/",
    headers: {
      Authorization: API_KEY,
    },
  });
  
  // Fetch popular videos
  export const fetchPopularVideos = () => {
    return instance.get("popular?per_page=15");
  };
  
  // Search videos by keyword
  export const searchVideos = (query, page = 1) => {
    return instance.get(`search?query=${query}&per_page=15&page=${page}`);
  };

  