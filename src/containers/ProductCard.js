import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onViewProduct }) => {
    const [lovedProducts, setLovedProducts] = useState({}); // Track loved products
    const [heartAnimation, setHeartAnimation] = useState({}); // Track animation state for each heart
    const { id, title, image, price, category } = product;

    // Toggle loved state and trigger animation
    const toggleLove = (id) => {
        setLovedProducts((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));

        // Trigger heart animation
        setHeartAnimation((prevState) => ({
            ...prevState,
            [id]: true,
        }));

        // Reset animation state after animation completes
        setTimeout(() => {
            setHeartAnimation((prevState) => ({
                ...prevState,
                [id]: false,
            }));
        }, 300); // Reset after animation duration (0.3s)
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 product-card-wrapper" style={{ '--index': id }}>
            <div className="card h-100 border-0 rounded-3 product-card position-relative" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                {/* Floating Heart Icon */}
                <div
                    className={`love-icon position-absolute top-0 end-0 p-2 ${heartAnimation[id] ? 'heart-pop' : ''}`}
                    onClick={() => toggleLove(id)}
                    style={{ cursor: 'pointer'}}
                >
                    {lovedProducts[id] ? (
                        <FaHeart size={25} color="#D32F2F" />
                    ) : (
                        <FaRegHeart size={25} color="gray" />
                    )}
                </div>

                {/* Product Image */}
                <img
                    src={image}
                    className="card-img-top product-image"
                    alt={title}
                    loading="lazy"
                    style={{
                        objectFit: 'contain',
                        maxHeight: '180px',
                        width: '100%',
                        margin: '0 auto',
                        padding: '20px',
                    }}
                />
                <div className="card-body">
                    {/* Product Title */}
                    <h5 className="card-title text-dark text-truncate">{title}</h5>
                    {/* Product Category */}
                    <p className="card-text text-muted text-capitalize">{category}</p>
                    {/* Product Price */}
                    <p className="fw-bold" style={{ fontSize: '1.3rem' }}>${price}</p>
                </div>
                <div className="card-footer">
                    <button className="btn w-100" onClick={() => onViewProduct(id)}>
                        View Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
