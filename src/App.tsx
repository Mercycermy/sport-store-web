import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
    return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
