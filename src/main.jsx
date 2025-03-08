import React from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './contexts/CartContext';
import './App.css';
import App from './App';
import Wishlist from './pages/Wishlist';
import WishlistProvider from './contexts/WishlistContext';

// Find the root element where your app will be rendered
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render your app
root.render(
  <CartProvider>
    <WishlistProvider>
    <App />
  </WishlistProvider>
  </CartProvider>
);
