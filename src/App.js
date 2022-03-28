import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SinglePageCart from './pages/SinglePageCart/SinglePageCart';
import { commerce } from "./lib/commerce";
import Cart from "./pages/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();

    setProducts(response.data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

   const handleUpdateCartQty = async (productId, quantity) => {
     const res = await commerce.cart.update(productId, { quantity });

     setCart(res.cart);
   };

   const handleRemoveFromCart = async (productId) => {
     const res = await commerce.cart.remove(productId);

     setCart(res.cart);
   };

   const handleEmptyCart = async () => {
     const res = await commerce.cart.empty();

     setCart(res.cart);
   };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            products={products}
            onAddToCart={handleAddToCart}
            totalItems={cart.total_items}
          />
        </Route>
        <Route>
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            onAddToCart={handleAddToCart}
          />
        </Route>
        <Route>
          <SinglePageCart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
