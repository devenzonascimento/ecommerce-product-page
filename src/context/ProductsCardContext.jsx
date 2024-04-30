import { createContext, useState, useReducer, useContext } from "react";
import useToggleBasketModal from "../hooks/useToggleBasketModal";

export const ProductCartContext = createContext();

const id = 1;

const storeProducts = {
  1: {
    images: [
      "src/assets/image-product-1.jpg",
      "src/assets/image-product-2.jpg",
      "src/assets/image-product-3.jpg",
      "src/assets/image-product-4.jpg",
    ],
    thumbnails: [
      "src/assets/image-product-1-thumbnail.jpg",
      "src/assets/image-product-2-thumbnail.jpg",
      "src/assets/image-product-3-thumbnail.jpg",
      "src/assets/image-product-4-thumbnail.jpg",
    ],
    brand: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.0,
    discount: 50,
  },
  2: {
    images: [
      "src/assets/image-product-3.jpg",
      "src/assets/image-product-1.jpg",
      "src/assets/image-product-4.jpg",
      "src/assets/image-product-2.jpg",
    ],
    thumbnails: [
      "src/assets/image-product-3-thumbnail.jpg",
      "src/assets/image-product-1-thumbnail.jpg",
      "src/assets/image-product-4-thumbnail.jpg",
      "src/assets/image-product-2-thumbnail.jpg",
    ],
    brand: "Sneaker Company",
    name: "Produto Teste 2 ",
    description:
      "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 550.0,
    discount: 20,
  },
  3: {
    images: [
      "src/assets/image-product-2.jpg",
      "src/assets/image-product-3.jpg",
      "src/assets/image-product-1.jpg",
      "src/assets/image-product-4.jpg",
    ],
    thumbnails: [
      "src/assets/image-product-2-thumbnail.jpg",
      "src/assets/image-product-3-thumbnail.jpg",
      "src/assets/image-product-1-thumbnail.jpg",
      "src/assets/image-product-4-thumbnail.jpg",
    ],
    brand: "Sneaker Company",
    name: "Produto Teste 3",
    description:
      "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 90.0,
    discount: 15,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      if (state.counter > 0) return { counter: state.counter - 1 };

    default:
      return state;
  }
};

export const ProductCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const [requestID, setRequestID] = useState(0);

  const [basketProducts, setBasketProducts] = useState([]);

  const [quantityProductsInCard, setQuantityProductsInCard] = useState(0);

  const {
    isOpenShopCart,
    handleOpenCartModal,
    handleToggleCartModal,
    handleOutsideClick,
  } = useToggleBasketModal();

  const getQuantityProductsInCard = () => {
    let total = 0;
    for (let product of basketProducts) {
      total += product.quantity;
    }
    return setQuantityProductsInCard(total);
  };

  const handleAddToCart = () => {
    for (let product of basketProducts) {
      if (product.id === id) {
        product.quantity += state.counter;
        return setBasketProducts([...basketProducts]);
      }
    }

    const newProduct = {
      requestID: requestID,
      thumbnail: storeProducts[id].thumbnails[0],
      id: id,
      name: storeProducts[id].name,
      price: storeProducts[id].price,
      discount: storeProducts[id].discount,
      quantity: state.counter,
    };
    basketProducts.push(newProduct);
    setBasketProducts(basketProducts);

    setRequestID((prev) => (prev += 1));
    return;
  };

  const handleRemoveProduct = (index) => {
    basketProducts.splice(index, 1);
    setBasketProducts([...basketProducts]);
    getQuantityProductsInCard();
  };

  return (
    <ProductCartContext.Provider
      value={{
        storeProducts,
        basketProducts,
        handleAddToCart,
        handleRemoveProduct,
        getQuantityProductsInCard,
        quantityProductsInCard,
        isOpenShopCart,
        handleOpenCartModal,
        handleToggleCartModal,
        handleOutsideClick,
        state,
        dispatch,
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export const useProductCartContext = () => {
  const context = useContext(ProductCartContext);
  return context;
};

/*
const [basketProducts, setBasketProducts] = useState([
  {
      requestID: 0,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 0,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.0,
      quantity: 0,
    },
    {
      requestID: 1,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 1,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.1,
      quantity: 0,
    },
    {
      requestID: 2,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 2,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.2,
      quantity: 0,
    },
    {
      requestID: 3,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 3,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.3,
      quantity: 0,
    },
    {
      requestID: 4,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 4,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.4,
      quantity: 0,
    },
    {
      requestID: 5,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 5,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.5,
      quantity: 0,
    },
  ]);
*/
