import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, setRelatedProducts } from '../redux/actions/productActions';
import ProductCard from './ProductCard'; 

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const relatedProducts = useSelector((state) => state.allProducts.relatedProducts);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectedProduct(response.data));
            fetchRelatedProducts(response.data.category);  // Fetch related products by category
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const fetchRelatedProducts = async (category) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            dispatch(setRelatedProducts(response.data));  // Dispatch related products to Redux store
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const handleViewProduct = (id) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
    }, [productId]);

    return (
        <div className="product-details container my-5 pt-5">
            {/* Product Information */}
            {Object.keys(product).length === 0 ? (
                <div className="loading text-center py-5">Loading...</div>
            ) : (
                <div className="row align-items-center">
                    {/* Product Image */}
                    <div className="col-lg-6">
                        <div className="image-container mb-4">
                            <img src={image} className="card-img-top product-image" alt={title} loading="lazy" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <h1>{title}</h1>
                        <h2>${price}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            )}

            {/* Related Products Section */}
            <div className="container my-5">
                <h3 className="mb-4">Related Products</h3>
                <div className="row">
                    {relatedProducts.map((relatedProduct) => (
                        <ProductCard
                            key={relatedProduct.id}
                            product={relatedProduct}
                            onViewProduct={handleViewProduct} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
