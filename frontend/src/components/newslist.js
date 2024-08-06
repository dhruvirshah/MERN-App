import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/api';
import './NewsList.css'; // Import CSS file for styling

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await fetchNews();
        setNews(newsData);
      } catch (error) {
        setError('Failed to fetch news.');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news-list">
      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        news.map((item, index) => (
          <div className="news-item" key={index}>
            <h2 className="news-title">{item.title}</h2>
            <p className="news-description">{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
