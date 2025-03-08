import React from 'react';
import Banner from '../components/Banner';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div>
      <Banner title="Welcome to Our Store" subtitle="Find the best products here!" />
      <ProductList />
      
    </div>
  );
};

export default Home;
