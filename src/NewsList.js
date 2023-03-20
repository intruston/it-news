import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NewsContext from './utils/NewsContext';

const NewsList = () => {
  const { news } = useContext(NewsContext);

  return (
    <div className="section-container">
      {news.map((newsItem) => (
        <div key={newsItem._id}>
          <Link to={{ pathname: `/news/${newsItem._id}`}} className="news-link">
            <h2>{newsItem.article}</h2>
          </Link>
          <img alt={newsItem._id} className="news-image" src={newsItem.image} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
