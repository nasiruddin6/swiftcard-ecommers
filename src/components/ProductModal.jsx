import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
    const { addToCart } = useCart();

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img src={product.image} alt={product.title} />
                    </div>

                    <div className="modal-details">
                        <span className="modal-category">{product.category}</span>
                        <h2 className="modal-title">{product.title}</h2>

                        <div className="modal-rating">
                            <span className="star-icon">★</span>
                            <span>{product.rating?.rate}</span>
                            <span className="rating-count">({product.rating?.count} reviews)</span>
                        </div>

                        <p className="modal-price">${product.price.toFixed(2)}</p>

                        <p className="modal-description">{product.description}</p>

                        <div className="modal-actions">
                            <button className="btn-primary btn-large" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                            <button className="btn-outline btn-large" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
