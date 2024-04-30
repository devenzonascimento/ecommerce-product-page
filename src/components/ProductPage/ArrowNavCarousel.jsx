const ArrowNavCarousel = ({ image, handleArrowSwitch }) => {

  return (
    <div className="carousel-container">
      <img src={image} alt="" className="current-image" />
      <button
        className="previous-icon carousel-icon"
        onClick={() => handleArrowSwitch("prev")}
      >
        <img src="src/assets/icon-previous.svg" alt="" />
      </button>
      <button
        className="next-icon carousel-icon"
        onClick={() => handleArrowSwitch("next")}
      >
        <img src="src/assets/icon-next.svg" alt="" />
      </button>
    </div>
  );
};

export default ArrowNavCarousel;
