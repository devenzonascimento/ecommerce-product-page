const ProductDescription = ({ productInfo }) => {
  const { brand, name, description } = productInfo;

  return (
    <>
      <span className="product-brand">{brand}</span>
      <h1 className="product-name">{name}</h1>
      <p className="product-description">{description}</p>
    </>
  );
};
export default ProductDescription;
