import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import './Home.css';

const Home = ({ onNavigate, onOpenModal }) => {
    const [topProducts, setTopProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTopProducts = async () => {
            try {
                const data = await fetchProducts();
                // Sort by rating rate descending
                const sorted = data.sort((a, b) => b.rating.rate - a.rating.rate);
                // Take top 3
                setTopProducts(sorted.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch top products", error);
            } finally {
                setLoading(false);
            }
        };
        loadTopProducts();
    }, []);

    return (
        <div className="home-page">
            <Hero onShopNow={() => onNavigate('products')} />

            <Features />

            <section className="top-rated container">
                <h2 className="section-title">Top Rated Products</h2>
                {loading ? (
                    <div className="loading-spinner">Loading...</div>
                ) : (
                    <div className="product-grid">
                        {topProducts.map(product => (
                            <ProductCard key={product.id} product={product} onOpenModal={onOpenModal} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
