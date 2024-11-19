import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, setRelatedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const relatedProducts = useSelector((state) => state.allProducts.relatedProducts);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
    }, [productId]);

    return (
        <div className="product-details container my-5">
            {Object.keys(product).length === 0 ? (
                <div className="loading text-center py-5">Loading...</div>
            ) : (
                <div className="row align-items-center">
                    {/* Product Image Section */}
                    <div className="col-lg-6">
                        <div className="image-container mb-4">
                            <img
                                src={image}
                                alt={title}
                                className="product-image shadow-lg rounded img-fluid product-image-zoom"
                            />
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <h1 className="product-title fw-bold">{title}</h1>
                        <h2 className="product-price text-primary fs-4">
                            <span>${price}</span>
                        </h2>
                        <p className="product-category text-muted">
                            <strong>Category:</strong> {category}
                        </p>

                        <div className="product-description mt-4">
                            <h5>Description</h5>
                            <p>{description}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons mt-5">
                            <button className="btn btn-gradient btn-lg me-3">
                                <i className="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button className="btn btn-outline-primary btn-lg">
                                <i className="fas fa-credit-card"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Review Section */}
            <div className="review-section mt-5">
                <h3 className="mb-4">Customer Reviews</h3>
                <div className="d-flex flex-column">
                    {/* Review */}
                    <div className="review mb-4 p-3 bg-light rounded shadow-sm">
                        <div className="d-flex align-items-center">
                            <div className="stars">
                                {[...Array(5)].map((_, index) => (
                                    <i
                                        key={index}
                                        className={`fas fa-star ${index < 4 ? 'text-warning' : 'text-muted'}`}
                                    ></i>
                                ))}
                            </div>
                            <span className="ms-3 text-muted">4.5 / 5</span>
                        </div>
                        <p className="mt-2 text-muted">This product is amazing! Highly recommend it.</p>
                    </div>

                    {/* Add Review Form */}
                    <div className="add-review bg-light p-4 rounded shadow-sm">
                        <h5 className="mb-3">Write a Review</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="reviewRating" className="form-label">Rating</label>
                                <select className="form-select" id="reviewRating" required>
                                    <option value="">Choose Rating</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reviewText" className="form-label">Review</label>
                                <textarea
                                    id="reviewText"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Write your review here"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Submit Review</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="container my-5">
                <h3 className="mb-4">Related Products</h3>
                <div className="row">
                    {relatedProducts.map((relatedProduct, index) => (
                        <div
                            className="col-lg-3 col-md-4 col-sm-6 mb-4 product-card-wrapper"
                            key={relatedProduct.id}
                            style={{ '--index': index }}
                        >
                            <Link to={`/product/${relatedProduct.id}`} className="product-link text-decoration-none">
                                <div className="card h-100 shadow-sm border-0 rounded-3 product-card">
                                    {/* Product Image */}
                                    <img
                                        src={relatedProduct.image}
                                        className="card-img-top product-image"
                                        alt={title}
                                        loading="lazy"
                                    />
                                    <div className="card-body">
                                        {/* Product Title */}
                                        <h5 className="card-title text-dark text-truncate">{relatedProduct.title}</h5>
                                        {/* Product Category */}
                                        <p className="card-text text-muted text-capitalize">{relatedProduct.category}</p>
                                        {/* Product Price */}
                                        <p className="card-text text-primary fw-bold">${relatedProduct.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
