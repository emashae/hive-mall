import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductComp = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="col-md-3 mb-4" key={id}>
                <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                    <div className="card h-100">
                        <img src={image} className="card-img-top p-3" alt={title} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">{title}</h5>
                            <p className="card-text text-muted">{category}</p>
                            <p className="card-text text-primary">$ {price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return <div className="row">{renderList}</div>;
};

export default ProductComp;
