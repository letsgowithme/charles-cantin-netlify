import React, { useState } from "react";
import { WeddingSliderData } from "./WeddingSliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimesCircle } from "react-icons/fa";
import "./ImageSlider.css";
import GalleryImages from "../pages/gallery/GalleryImages";


const WeddingSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  

  const [slider_class, setSliderClass] = useState("slider-icon");
  const [arrowClass, setArrowClass] = useState("arrow");
  // const [gallery_class, setGalleryClass] = useState("galleryImages visible");

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
 
  const closeSlider = () => {
      setCurrent(current === false );
      setSliderClass("slider-icon hidden");
      setArrowClass("arrow hidden");
      // setGalleryClass("gallery_collage visible")
    
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
    {/* <div className={gallery_class}>
      <GalleryImages />
      </div> */}
    <section className="slider">
      
 
     <div className="left-arrow">
     <FaArrowAltCircleLeft
        className={arrowClass}
        onClick={prevSlide}
        style={{ zIndex: "10" }}
      />
     </div>
    
     <div className="right-arrow">
     <FaArrowAltCircleRight
        className={arrowClass}
        onClick={nextSlide}
        style={{ zIndex: "10" }}
      />
     </div>
    
    <div className="close-icon">
    <FaTimesCircle
        className={slider_class}
        onClick={ closeSlider }
        style={{ zIndex: "10" }}
      />
    </div>
      
      
      {WeddingSliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="mariage" className="slider-img" />
            )}
          </div>
        );
      })}
    </section>
    </>
  );
  
};


export default WeddingSlider;
