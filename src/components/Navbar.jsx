import React from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = ({ onNavigate, currentPage }) => {
    const { cartCount } = useCart();

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo" onClick={() => onNavigate('home')}>
                    SwiftCart
                </div>
                <ul className="nav-links">
                    <li className={currentPage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</li>
                    <li className={currentPage === 'products' ? 'active' : ''} onClick={() => onNavigate('products')}>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="cart-icon">
                    <button className="cart-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
