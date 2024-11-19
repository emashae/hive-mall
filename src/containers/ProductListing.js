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
        <div className="product-listing">
            <div className="hero-section">
                <div className="overlay">
                    <h1 className="display-4 fw-bold text-white text-center">Discover Your Style</h1>
                    <p className="lead text-white text-center">
                        Shop the latest trends with ease.
                    </p>
                </div>
            </div>
            <div className="container my-5">
                <ProductComp />
            </div>
        </div>
    );
};

export default ProductListing;
