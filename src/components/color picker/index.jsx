import React, { useState } from 'react';
import "./index.css"


//Study this, this is really interesting. 

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('Green');


  const handleChange=(e)=>{
    setCurrentColor(e.target.value)
  }

//   const changeToOrange = () => {
//     setCurrentColor('Orange');
//     setClicked(true);
//   };

//   const changeToBlue = () => {
//     setCurrentColor('Blue');
//     setClicked(true);
//   };

  return (
    <div>
      <input
        className={currentColor}
        onClick={handleChange}
        type="radio"
        id="option1"
        name="color"
        value="Red"
      />
      <label htmlFor="option1">Red</label>

      <input
        className={currentColor}
        onClick={handleChange}
        type="radio"
        id="option2"
        name="color"
        value="Orange"
      />
      <label htmlFor="option2">Orange</label>

      <input
        className={currentColor}
        onClick={handleChange}
        type="radio"
        id="option3"
        name="color"
        value="Blue"
      />
      <label htmlFor="option3">Blue</label>

      <div className={currentColor}>{currentColor}</div>
    </div>
  );
};

export default ColorPicker;
