import React from 'react';
//import '../styles/components/Home.css'
import { Products } from '../components/Products';
import initialState from '../initialState';
export const Home = () => {
  return <Products products={initialState.products} />;
};
