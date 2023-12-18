import React from "react";
import Carousell from "./Component/Carousell";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import "@fontsource/roboto";
import CategoryMenu from "./Component/CategoryMenu";
import Footer from "./Component/Footer";
import CartBox from "./Component/ProductsInTheCart/CartBox";
import { useState } from "react";
// SKJSJBK
const App = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleCartItemCountChange = (count) => {
    setCartItemCount(count);
  };

  return (
    <div className="App">
      <NavigationBar
        setIsCartDrawerOpen={setIsCartDrawerOpen}
        cartItemCount={cartItemCount}
      />
      <CategoryMenu />
      <Carousell />
      <CartBox
        isCartDrawerOpen={isCartDrawerOpen}
        setIsCartDrawerOpen={setIsCartDrawerOpen}
        onCartItemCountChange={handleCartItemCountChange}
      />
      <Footer />
    </div>
  );
};

export default App;
