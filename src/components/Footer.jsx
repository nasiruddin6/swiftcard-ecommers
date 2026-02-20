import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>SwiftCart</h3>
                    <p>Your one-stop shop for everything.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 SwiftCart. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
