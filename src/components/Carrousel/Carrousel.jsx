import { useState } from "react";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import propTypes from "prop-types";

const Carrousel = ({ carrouselImg }) => {
  let [currentIndex, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index) => (index === carrouselImg.length - 1 ? 0 : index + 1));
  };

  const previousSlide = () => {
    setIndex((index) => (index === 0 ? carrouselImg.length - 1 : index - 1));
  };

  return (
    <div className="carrousel">
      {carrouselImg.map((img, index) => (
        <img
          key={index}
          className={`caroussel-img ${index === currentIndex ? "active" : ""}`}
          src={img}
          alt={"image carrousel " + (index + 1)}
        />
      ))}
      {carrouselImg.length > 1 ? (
        <>
          <img
            className="arrow arrow_left"
            src={arrowLeft}
            alt="flèche de gauche"
            onClick={previousSlide}
          />
          <img
            className="arrow arrow_right"
            src={arrowRight}
            alt="flèche de droite"
            onClick={nextSlide}
          />
          <div className="currentSlide">
            {currentIndex + 1}/{carrouselImg.length}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

Carrousel.propTypes = {
  carrouselImg: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Carrousel;
