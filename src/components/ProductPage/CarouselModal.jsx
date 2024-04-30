import ArrowNavCarousel from "./ArrowNavCarousel";
import ThumbNavCarousel from "./ThumbNavCarousel";

const CarouselModal = ({
  modalIsOpen,
  handleToggleCarouselModal,
  image,
  thumbnails,
  handleArrowSwitch,
  handleThumbSwitch
}) => {

  if (modalIsOpen) {
    return (
      <div className="modal-overlay">
        <dialog className="modal-container">
          <button className="close-button" onClick={handleToggleCarouselModal}>
            <img src="src/assets/icon-close.svg" alt="close icon" />
          </button>
          <ArrowNavCarousel
            image={image}
            handleArrowSwitch={handleArrowSwitch}
          />
          <ThumbNavCarousel
            thumbnails={thumbnails}
            handleThumbSwitch={handleThumbSwitch}
          />
        </dialog>
      </div>
    );
  }
};

export default CarouselModal;
