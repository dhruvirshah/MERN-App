// src/pages/Home.js
import React from 'react';
import NewsList from '../components/newslist';

const Home = () => (
  <div>
    <h1>Today's latest news</h1>
    <NewsList />
  </div>
);

export default Home;
