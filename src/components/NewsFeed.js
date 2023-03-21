import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";

const NewsFeed = () => {
  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetch(
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-owhxg/endpoint/allnews"
  );

  useEffect(() => {
    if (data) {
      setAllNews(data);
    }
  }, [data]);

  if (loading) {
    return <div className="feed-container">Loading...</div>;
  }

  if (error) {
    return <div className="feed-container">Something went wrong: {error}</div>;
  }

  const newsPerPage = 10;
  const totalPages = Math.ceil(allNews.length / newsPerPage);
  const newsByDate = allNews.reduce((acc, news) => {
    const date = new Date(news.publishing_time);
    const options = { weekday: "long", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    acc[formattedDate] = acc[formattedDate] || [];
    acc[formattedDate].push(news);
    return acc;
  }, {});

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const displayedNews = Object.keys(newsByDate)
    .sort((a, b) => new Date(b) - new Date(a))
    .slice(0, currentPage * newsPerPage)
    .map((date) => (
      <div key={date}>
        <h3>{date}</h3>
        <ul>
          {newsByDate[date].map((news) => (
            <Link to={{ pathname: `/news/${news._id}` }} class="news-link">
              <li key={news._id}>{news.article}</li>
            </Link>
          ))}
        </ul>
      </div>
    ));

  return (
    <div className="feed-container">
      {displayedNews}
      {currentPage < totalPages && (
        <button className="search-button" onClick={loadMore}>Show Older News</button>
      )}
    </div>
  );
};

export default NewsFeed;
