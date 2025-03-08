import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/product/${id}`).then(response => setProduct(response.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
