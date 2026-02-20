import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = ({ onOpenModal }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const [productsData, categoriesData] = await Promise.all([
                    fetchProducts(),
                    fetchCategories()
                ]);
                setProducts(productsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const handleCategoryClick = async (category) => {
        setActiveCategory(category);
        setLoading(true);
        try {
            let data;
            if (category === 'all') {
                data = await fetchProducts();
            } else {
                data = await fetchProductsByCategory(category);
            }
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products by category", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container products-page">
            <div className="filters">
                <button
                    className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('all')}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} onOpenModal={onOpenModal} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
