import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: "🚚",
            title: "Fast Delivery",
            text: "Get your orders delivered within 24 hours."
        },
        {
            icon: "🎧",
            title: "24/7 Support",
            text: "We are here to help you anytime, anywhere."
        },
        {
            icon: "🛡️",
            title: "Secure Payment",
            text: "Your transactions are 100% safe and secure."
        }
    ];

    return (
        <section className="features container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-text">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
