const ProductPrice = ({ productInfo }) => {
  const { price, discount } = productInfo;

  if (discount == 0) {
    return (
      <div className="price-box">
        <span className="price">${price}</span>
      </div>
    );
  } else {
    let discountedPrice = price - (price * discount) / 100;
    return (
      <div className="price-box">
        <span className="price">${discountedPrice.toFixed(2)}</span>
        <span className="discount-percentage">{discount}%</span>
        <span className="discount-price">${price.toFixed(2)}</span>
      </div>
    );
  }
};

export default ProductPrice;

