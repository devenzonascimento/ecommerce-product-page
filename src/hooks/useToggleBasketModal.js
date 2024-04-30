import { useState } from "react";

const useToggleBasketModal = () => {
  const [isOpenShopCart, setIsOpenShopCart] = useState(false);

  const handleToggleCartModal = () => {
    setIsOpenShopCart(!isOpenShopCart);
  };

  const handleOpenCartModal = () => {
    setIsOpenShopCart(true);
  };
  
  const handleOutsideClick = () => {
      setIsOpenShopCart(false);
  }

  return {
    isOpenShopCart,
    handleToggleCartModal,
    handleOpenCartModal,
    handleOutsideClick,
  };
};

export default useToggleBasketModal;
