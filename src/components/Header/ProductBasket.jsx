import { useProductCartContext } from "../../context/ProductsCardContext";

import BasketItem from "./BasketItem";

const ProductBasket = ({ isOpen, handleOutsideClick }) => {
  const { basketProducts } = useProductCartContext();

  return (
    <>
      {isOpen && (
        <>
          <dialog className="basket-container" open>
            <h2>Cart</h2>
            <div className="basket">
              {basketProducts != "" ? (
                <>
                  <ul className="basket-list-items">
                    {basketProducts.map((basketProduct, index) => {
                      return (
                        <BasketItem
                          basketProduct={basketProduct}
                          listIndex={index}
                          key={basketProduct.id}
                        />
                      );
                    })}
                  </ul>
                  <button className="checkout-button">Checkout</button>
                </>
              ) : (
                <span>Your cart is empty.</span>
              )}
            </div>
          </dialog>
          <div className="overlay" onClick={handleOutsideClick}></div>
        </>
      )}
    </>
  );
};

export default ProductBasket;
