import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext'; // ✅ Import Cart Context
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [showLargeImage, setShowLargeImage] = useState(false);
  const { addToCart } = useContext(CartContext); // ✅ Get `addToCart` function

  useEffect(() => {
    if (!product) {
      axios.get(`/api/product/${id}`)
        .then(response => {
          console.log("Product data received:", response.data); // Debugging log
          setProduct(response.data);
        })
        .catch(error => console.error("Error fetching product details:", error));
    }
  }, [id, product]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Left Section: Product Image */}
        <div className="product-image-section">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
            onClick={() => setShowLargeImage(true)}
          />
        </div>

        {/* Right Section: Product Info */}
        <div className="product-info-section">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description || 'No description available'}</p>

          {/* Buttons */}
          <div className="product-actions">
            <button 
              className="add-to-cart" 
              onClick={() => addToCart(product)} // ✅ Add product to cart
            >
              🛒 Add to Cart
            </button>
            <button className="save-later">❤️ Save for Later</button>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {showLargeImage && (
        <div className="image-modal" onClick={() => setShowLargeImage(false)}>
          <img src={product.imageUrl} alt={product.name} className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
