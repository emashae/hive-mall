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
                <div>...Loading</div>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} alt={title} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-dark">{title}</h3>
                        <h4 className="text-primary">$ {price}</h4>
                        <p className="text-muted">{category}</p>
                        <p>{description}</p>
                        <button className="btn btn-warning mt-3">
                            <i className="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
