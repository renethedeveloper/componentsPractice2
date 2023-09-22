import React, { useState } from 'react';

const NewTicker = () => {
  const [news, setNews] = useState([
    'Rene Wins lottery',
    'Akshat marrys super model!',
    'Simo wins Nobel Prize!',
    'Chase Van Hale elected President!',
    'Shares of Dunkin Donuts up 45%!',
  ]);

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const nextNewsItem = () => {
    // Increment the currentNewsIndex to move to the next news item
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  return (
    <div>
      <button onClick={nextNewsItem}>Next</button>
      <div>{news[currentNewsIndex]}</div>
    </div>
  );
};

export default NewTicker;
