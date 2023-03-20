import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsList from './NewsList';
import Header from './Header';
import NewsFeed from './NewsFeed';
import Search from './Search';
import NewsID from './NewsID';
import NewsProvider from './utils/NewsProvider';
import Footer from './Footer';

function App() {
  return (
    <NewsProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news/:id" element={<NewsID />} />
      </Routes>
      <Footer />
    </Router>
    </NewsProvider>
  );
}

export default App;
