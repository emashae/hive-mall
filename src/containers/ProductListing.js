import React from 'react'
import { useSelector } from 'react-redux';
import ProductComp from './ProductComp';


const ProductListing = () => {
    const products = useSelector((state) => state);
  return (
    <div className='ui grid container'>
        <ProductComp/>
    </div>
  )
}

export default ProductListing