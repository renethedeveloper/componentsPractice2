import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./index.css";

const RateReview = () => {
  const [ratings, setRatings] = useState([false, false, false, false, false]);
  const [isVisible, setIsVisible] = useState(false);

  const handleStarClick = (index) => {
    const newRatings = [...ratings];
    for (let i = 0; i < ratings.length; i++) {
      newRatings[i] = i <= index; 
    }
    setRatings(newRatings);
  };

    const handleClick=()=>{
        setIsVisible(true);
    }
  return (
    <div className='container'>
        <div className="stars">
      {ratings.map((isClicked, index) => (
        
        <button 
          key={index}
          onClick={() => handleStarClick(index)}
          className={isClicked ? 'color-yellow' : 'color-black'}
        >
          <StarBorderIcon />
        </button>
       
      ))}
       </div>
      
      <button onClick={handleClick} >Submit</button>
      
      {isVisible && <h2>Thank you for your review!</h2>}
    </div>
  );
};

export default RateReview;
