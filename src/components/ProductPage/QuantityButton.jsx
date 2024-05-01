import { useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";

const QuantityButton = () => {
  const { state, dispatch } = useContext(ProductCartContext);

  return (
    <div className="quantity-container">
      <button
        className="quantity-button"
        onClick={() => dispatch({ type: "decrement" })}
      >
        <img src="assets/icon-minus.svg" alt="minus icon" />
      </button>
      <span className="quantity">{state.counter}</span>
      <button
        className="quantity-button"
        onClick={() => dispatch({ type: "increment" })}
      >
        <img src="assets/icon-plus.svg" alt="plus icon" />
      </button>
    </div>
  );
};

export default QuantityButton;
