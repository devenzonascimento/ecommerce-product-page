import { useProductCartContext } from "../../context/ProductsCardContext";

const BasketItem = ({ basketProduct, listIndex }) => {
  const { thumbnail, name, price, quantity, discount } = basketProduct;

  const { handleRemoveProduct } = useProductCartContext();

  const finalPrice = discount != 0 ? price - (price * discount) / 100 : price;

  return (
    <li className="basket-item">
      <img src={thumbnail} alt="" className="mini-thumbnail" />
      <div className="product-details">
        <span className="product-name">{name}</span>
        <span className="product-values">
          ${finalPrice.toFixed(2)} x {quantity}{" "}
          <strong>${(finalPrice * quantity).toFixed(2)}</strong>
        </span>
      </div>

      <img
        src="src/assets/icon-delete.svg"
        alt="delete icon"
        className="delete-icon"
        onClick={() => handleRemoveProduct(listIndex)}
      />
    </li>
  );
};

export default BasketItem;
