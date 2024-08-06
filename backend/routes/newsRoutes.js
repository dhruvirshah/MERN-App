const express = require('express');
const axios = require('axios');
const router = express.Router();
const { NEWS_API_KEY } = require('../config/config');
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        apiKey: NEWS_API_KEY,
        country: 'us',
        category: 'general',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});

module.exports = router;
