import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import NewsContext from './NewsContext';

const NewsProvider = ({ children }) => {
  const { data, loading, error } = useFetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-owhxg/endpoint/news');
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (data) {
      setNews(data);
    }
  }, [data]);

  if (loading) {
    return <div className="feed-container">Loading...</div>;
  }

  if (error) {
    return <div className="feed-container">Something went wrong: {error}</div>;
  }

  return (
    <NewsContext.Provider value={{ news }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;