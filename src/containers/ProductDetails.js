// ProductDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Error:", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
    }, [productId]);

    return (
        <div className="container my-5">
            {Object.keys(product).length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div className="row">
                    {/* Product Image Section */}
                    <div className="col-md-6">
                        <img src={image} alt={title} className="img-fluid rounded shadow-lg" />
                    </div>

                    {/* Product Info Section */}
                    <div className="col-md-6">
                        <h3 className="text-dark font-weight-bold mb-3">{title}</h3>
                        <h4 className="text-primary mb-3">
                            <span className="badge bg-warning text-dark fs-4 p-3">${price}</span>
                        </h4>
                        <p className="text-muted fs-6 mb-3">Category: <strong>{category}</strong></p>

                        <div className="border-top pt-3 mt-3 mb-3">
                            <h5 className="text-dark">Product Description</h5>
                            <p>{description}</p>
                        </div>

                        {/* Add to Cart / Buy Now Button */}
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-lg btn-warning px-4 py-2">
                                <i className="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button className="btn btn-lg btn-success px-4 py-2">
                                <i className="fas fa-credit-card"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
