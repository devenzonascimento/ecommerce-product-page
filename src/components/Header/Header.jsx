import { useState, useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";

import Nav from "./Nav";
import ProductBasket from "./ProductBasket";

import "./style.scss";

const Header = () => {
  const {
    quantityProductsInCard,
    isOpenShopCart,
    handleToggleCartModal,
    handleOutsideClick,
  } = useContext(ProductCartContext);

  const [isOpenMenu, setIsOpenMenu] = useState("");

  const handleOpenMenu = () => {
    isOpenMenu !== "flex" ? setIsOpenMenu("flex") : setIsOpenMenu("none");
  };

  return (
    <header className="header-container">
      <img
        src="src/assets/icon-menu.svg"
        alt="menu icon"
        className="menu-icon"
        onClick={handleOpenMenu}
      />
      <img src="src/assets/logo.svg" alt="sneakers logo" className="logo" />
      <Nav isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
      <button
        className="shop-cart-button"
        quantity={quantityProductsInCard || ""}
      >
        <img
          src="src/assets/icon-cart.svg"
          alt="cart icon"
          className="cart-icon"
          onClick={handleToggleCartModal}
        />
        <ProductBasket
          isOpen={isOpenShopCart}
          handleOutsideClick={handleOutsideClick}
        />
      </button>
      <img
        src="src/assets/image-avatar.png"
        alt="avatar icon"
        className="avatar"
      />
    </header>
  );
};

export default Header;
