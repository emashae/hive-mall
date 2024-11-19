import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard'; 
import { useNavigate } from 'react-router-dom';

const ProductComp = () => {
    const products = useSelector((state) => state.allProducts.products);
    const navigate = useNavigate();

    const handleViewProduct = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="row">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onViewProduct={handleViewProduct} 
                />
            ))}
        </div>
    );
};

export default ProductComp;
