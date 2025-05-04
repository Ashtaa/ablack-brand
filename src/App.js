import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Cart from './components/Cart';
import LoginPage from './views/LoginPage';
import { useSelector } from 'react-redux';
import { selectUsers } from './store/usersSlice';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const clearCart=() =>{
setCartItems([])
  }
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, parseInt(quantity) || 0) } 
          : item
      ).filter((item) => item.quantity > 0) 
    );
  };
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  const user = useSelector(selectUsers)
  return (
    <div className="App">
   { user.currentUser ?
      <BrowserRouter>
        <Navbar />
       <Routes>
   <Route path="/" index element={<Home />} />
   <Route path="/products" element={<Products />}>
     
     <Route index element={<FeaturedProducts addToCart={addToCart} />} />
     <Route path="featured" element={<FeaturedProducts addToCart={addToCart} />} />
     <Route path="new" element={<NewProducts addToCart={addToCart} />} />
   </Route>
   <Route 
     path="/cart" 
     element={
       <Cart 
         cartItems={cartItems} 
         clearCart={clearCart} 
         removeItem={removeItem} 
         updateQuantity={updateQuantity} 
       />
     } 
   />
 </Routes>
      </BrowserRouter>
    :
    <LoginPage />
   }

    </div>
  );
}

export default App;
