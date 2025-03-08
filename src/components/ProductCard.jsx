import { Link } from 'react-router-dom';
import './ProductCard.css';
import { CartContext } from '../contexts/CartContext';
import React, { useContext,useState } from 'react';
import { WishlistContext } from '../contexts/WishlistContext';

const ProductCard = ({ product }) => {

  const [activeButton, setActiveButton] = useState(null);

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleButtonClick = (action, product, buttonId) => {
    action(product);
    setActiveButton(buttonId);
    setTimeout(() => setActiveButton(null), 500); // Remove active class after 500ms
  };

  

  
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button
        className={`add-to-cart ${activeButton === 'cart' ? 'active' : ''}`}
        onClick={() => handleButtonClick(addToCart, product, 'cart')}
      >
        Add to Cart
      </button>
      <button
        className={`save-later ${activeButton === 'wishlist' ? 'active' : ''}`}
        onClick={() => handleButtonClick(addToWishlist, product, 'wishlist')}
      >
        Save Later
      </button>
      <Link to="/wishlist">👁️‍🗨️</Link>
    </div>
  );
  
};

export default ProductCard;