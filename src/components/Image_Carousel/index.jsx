import { ImagesearchRoller } from '@mui/icons-material';
import React, { useState } from 'react'
import "./index.css"

const ImageCarousel = () => {

const [image, setImage] =useState(["https://m.media-amazon.com/images/I/61VQRkwAyKL.jpg","https://d5wt70d4gnm1t.cloudfront.net/media/a-s/artworks/patrick-nagel/68555-693349185199/patrick-nagel-commemorative-no-1-800x800.jpg","https://i.etsystatic.com/5546159/r/il/f6e6f7/2571754163/il_fullxfull.2571754163_bhpy.jpg","https://www.muddycolors.com/wp-content/uploads/2020/11/nagel.jpg","https://gspawn.com/cdn/shop/products/PatrickNagelMirageThumb.jpg?v=1670711744","https://image.invaluable.com/housePhotos/selkirkauctions/70/728470/H19687-L299926156.JPG","https://m.media-amazon.com/images/I/510BimuUS1L._AC_UF894,1000_QL80_.jpg"]);

const [currentIndex, setCurrentIdex] = useState(0);

//when they click next, if the previous index plus one equals the carousel length, then if goes to the zero index, the beginning of the index, , if there is more room to go, set the prevIndex to previous +1
const handleNext =()=>{
    setCurrentIdex((prevIndex)=>
    prevIndex +1 === image.length? 0: prevIndex +1)
}
//if prevIndex -1 is equal to or more than 0, then go ahead and move down in index, if not, then move to the top of the index. This wraps around the index, like A CAROUSEL!!
const handlePrevious = () => {
    setCurrentIdex((prevIndex) => {
      return prevIndex - 1 >= 0 ? prevIndex - 1 : image.length - 1;
    });
  };
  //couldn't get this to work.....
// const handledotClick=(index)=>{
// setCurrentIdex(index)
// };

return (
    //this just displays the image but only at the currentIndex.
    <div className="carousel">
        <h1 style={{color: "fuchsia"}}>Nagel Carousel</h1>
        <div className='images'>
      <img
        key={currentIndex}
        src={image[currentIndex]}
        alt={image[currentIndex]}
        style={{ maxHeight: "500px", marginBottom: "0" }}

      />
      </div>
      
      <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button> 

     
    </div>
  );
};

export default ImageCarousel;