import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductComp = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product, index) => {
        const { id, title, image, price, category } = product;
        return (
            <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4 product-card-wrapper"
                key={id}
                style={{ '--index': index }}
            >
                <Link to={`/product/${id}`} className="product-link text-decoration-none">
                    <div className="card h-100 shadow-sm border-0 rounded-3 product-card">
                        {/* Product Image */}
                        <img
                            src={image}
                            className="card-img-top product-image"
                            alt={title}
                            loading="lazy"
                        />
                        <div className="card-body">
                            {/* Product Title */}
                            <h5 className="card-title text-dark text-truncate">{title}</h5>
                            {/* Product Category */}
                            <p className="card-text text-muted text-capitalize">{category}</p>
                            {/* Product Price */}
                            <p className="card-text text-primary fw-bold">${price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return <div className="row product-grid">{renderList}</div>;
};

export default ProductComp;
