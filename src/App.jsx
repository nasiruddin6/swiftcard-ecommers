import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductModal from './components/ProductModal'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onOpenModal={handleOpenModal} />;
      case 'products':
        return <Products onOpenModal={handleOpenModal} />;
      default:
        return <Home onNavigate={setCurrentPage} onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <CartProvider>
      <div className="app">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    </CartProvider>
  )
}

export default App
