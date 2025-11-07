import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'h-16 bg-black/95 backdrop-blur-lg shadow-lg'
          : 'h-20 bg-black/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <img
            src="/photo_2025-11-07_10-07-11.jpg"
            alt="Dink Sports Wear"
            className={`transition-all duration-500 ${
              isScrolled ? 'h-10' : 'h-14'
            } w-auto object-contain filter drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]`}
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative text-white font-medium transition-all duration-300 hover:text-red-500 ${
                currentPage === item.id ? 'text-red-500' : ''
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transform origin-left transition-transform duration-300 ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0'
                } hover:scale-x-100`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-white hover:text-red-500 transition-colors duration-300 p-2 hover:scale-110 transform"
          >
            <Search size={20} />
          </button>

          <button
            className="md:hidden text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg p-4 shadow-xl">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-2xl mx-auto block px-6 py-3 bg-white/10 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
            autoFocus
          />
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-white font-medium py-2 transition-all duration-300 hover:text-red-500 hover:translate-x-2 ${
                  currentPage === item.id ? 'text-red-500' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
