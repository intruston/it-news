import React from 'react';
import useFetch from './utils/useFetch';

const NewsList = () => {
  const { data, loading, error } = useFetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-owhxg/endpoint/news');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <div>
      {data.map((news) => (
        <div key={news._id}>
          <h2>{news.article}</h2>
          <img alt={news._id} className="news-image" src={news.image} />
          <p>{news.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
