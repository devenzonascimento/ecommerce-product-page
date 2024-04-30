import { useContext, useState } from "react";
import { ProductCartContext } from "../../context/ProductsCardContext";

import ProductDescription from "./ProductDescription";
import AddToCartButton from "./AddToCartButton";
import ProductPrice from "./ProductPrice";
import QuantityButton from "./QuantityButton";
import ArrowNavCarousel from "./ArrowNavCarousel";
import ThumbNavCarousel from "./ThumbNavCarousel";

import "./style.scss";
import CarouselModal from "./CarouselModal";
import useCarouselImage from "../../hooks/useCarouselImage";

const ProductPage = () => {
  const { storeProducts } = useContext(ProductCartContext);
  const { images, thumbnails } = storeProducts[1];
  const { image, handleArrowSwitch, handleThumbSwitch } =
    useCarouselImage(images);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleToggleCarouselModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <main>
      {document.body.offsetWidth < 1024 && (
        <ArrowNavCarousel 
          image={image} 
          handleArrowSwitch={handleArrowSwitch} 
        />
      )}
      {document.body.offsetWidth >= 1024 && (
        <div className="carousel-container">
          <img
            src={image}
            alt={image}
            className="current-image"
            onClick={handleToggleCarouselModal}
          />
          <ThumbNavCarousel
            thumbnails={thumbnails}
            handleThumbSwitch={handleThumbSwitch}
          />
        </div>
      )}

      <div className="description-container">
        <ProductDescription productInfo={storeProducts[1]} />
        <ProductPrice productInfo={storeProducts[1]} />
        <div className="order-container">
          <QuantityButton />
          <AddToCartButton />
        </div>
      </div>

      <CarouselModal
        modalIsOpen={modalIsOpen}
        handleToggleCarouselModal={handleToggleCarouselModal}
        image={image}
        handleArrowSwitch={handleArrowSwitch}
        handleThumbSwitch={handleThumbSwitch}
        thumbnails={thumbnails}
      />
    </main>
  );
};

export default ProductPage;
