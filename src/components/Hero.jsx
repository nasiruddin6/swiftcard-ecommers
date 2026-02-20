import React from 'react';
import './Hero.css';

const Hero = ({ onShopNow }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Best Collection For You</h1>
                <p className="hero-subtitle">Discover the latest trends in fashion and electronics. Quality products at the best prices, delivered to your doorstep.</p>
                <button className="btn-primary hero-btn" onClick={onShopNow}>Shop Now</button>
            </div>
        </section>
    );
};

export default Hero;
