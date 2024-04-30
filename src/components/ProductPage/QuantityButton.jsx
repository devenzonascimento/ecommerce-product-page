import { useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";


const QuantityButton = () => {

  const {state, dispatch} = useContext(ProductCartContext)

  return (
    <button className="quantity-button">
      <img
        src="src/assets/icon-minus.svg"
        alt="minus icon"
        onClick={() => dispatch({ type: "decrement" })}
      />
      <span className="quantity">{state.counter}</span>
      <img
        src="src/assets/icon-plus.svg"
        alt="plus icon"
        onClick={() => dispatch({ type: "increment" })}
      />
    </button>
  );
};

export default QuantityButton;
