import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart (only adds a product if it's not already in the cart)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex !== -1) {
        // Product already exists, return the cart as is (quantity handling will be in Cart component)
        return prevCart;
      } else {
        // Add product with quantity of 1 if it's not already in the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
