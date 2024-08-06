import axios from 'axios';

const API_URL = 'https://newsapi.org/v2';
const API_KEY = '6a91a3f58fc34b6f8ceab80758b71e17'; // Replace with your actual API key

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    console.log('News data:', response.data); // Log data to verify
    return response.data.articles; // Ensure this returns an array of articles
  } catch (error) {
    console.error('Error fetching news:', error);
    return []; // Return an empty array on error
  }
};
