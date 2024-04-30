import { ProductCartProvider } from "./context/ProductsCardContext";

import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";

const App = () => {
  return (
    <ProductCartProvider>
      <Header />
      <ProductPage />
    </ProductCartProvider>
  );
};

export default App;


