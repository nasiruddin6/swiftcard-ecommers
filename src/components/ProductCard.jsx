import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onOpenModal }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <div className="product-card">
            <div className="card-image-container">
                <img src={product.image} alt={product.title} className="card-image" />
                <span className="card-category">{product.category}</span>
            </div>
            <div className="card-content">
                <h3 className="card-title" title={product.title}>
                    {product.title.length > 40 ? product.title.substring(0, 40) + '...' : product.title}
                </h3>
                <div className="card-rating">
                    <span className="star-icon">★</span>
                    <span>{product.rating?.rate}</span>
                    <span className="rating-count">({product.rating?.count})</span>
                </div>
                <div className="card-footer">
                    <span className="card-price">${product.price.toFixed(2)}</span>
                    <div className="card-actions">
                        <button className="btn-outline" onClick={() => onOpenModal(product)}>Details</button>
                        <button className="btn-primary" onClick={handleAddToCart}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
