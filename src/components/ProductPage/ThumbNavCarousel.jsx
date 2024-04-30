const ThumbNavCarousel = ({ thumbnails, handleThumbSwitch }) => {
  return (
    <div className="thumbs-container">
      {thumbnails.map((thumb, index) => {
        return (
          <button className={"thumbnail"} key={index}>
            <img
              src={thumb}
              alt={thumb}
              value={index}
              onClick={() => handleThumbSwitch(index)}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ThumbNavCarousel;
