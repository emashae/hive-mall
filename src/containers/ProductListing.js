import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/productActions";
import ProductComp from './ProductComp';

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch(setProducts(response.data));
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="product-listing"
            style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                    }}
        >
        <div className="hero-section" >
          <div className="overlay">
            <div className="hero-content">
              <h1>Discover Your Style</h1>
              <p>Shop the latest trends with ease.</p>
            </div>
          </div>
        </div>
        <div className="container my-5" >
          <ProductComp />
        </div>
      </div>
    );
};

export default ProductListing;
