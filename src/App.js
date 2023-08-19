import React, { useState } from "react";
import { CartContextProvider } from "./store/cart-context";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartOpenerHandler = () => setCartOpen(true);
  const cartCloserHandler = () => setCartOpen(false);
  return (
    <CartContextProvider>
      {cartOpen && <Cart onCartClose={cartCloserHandler} />}
      <Header onCartOpen={cartOpenerHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
