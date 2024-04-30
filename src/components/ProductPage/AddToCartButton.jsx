import { useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";


const AddToCartButton = () => {

  const { handleAddToCart, state, getQuantityProductsInCard, handleOpenCartModal } = useContext(ProductCartContext)
  
  return (
    <button className="add-to-card-button" onClick={() => {
      if (state.counter !== 0) {
        handleAddToCart()
        getQuantityProductsInCard()
        handleOpenCartModal()
      }
    }}>
      <img src="src/assets/icon-cart.svg" alt="cart icon" />
      Add to cart
    </button>
  );
};

export default AddToCartButton;
