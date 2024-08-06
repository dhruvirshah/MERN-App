import axios from 'axios';

export const fetchNews = async () => {
  try {
    const response = await axios.get('/api/news');
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching news');
  }
};
