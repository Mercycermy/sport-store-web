import { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';
import soccerball from '../data/images/soccerball.jpg';
import jersey from '../data/images/jersey.jpg';
import cleats from '../data/images/cleats.jpg';

type HomeProps = {
  onNavigate?: (page: string) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMd, setIsMd] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const categories = [
    { name: 'Footballs', image: soccerball, color: 'from-red-500 to-orange-500' },
    { name: 'Jerseys', image: jersey, color: 'from-orange-500 to-red-400' },
    { name: 'Cleats', image: cleats, color: 'from-red-400 to-orange-600' },
  ];

  return (
  <div className="bg-white text-gray-900">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-orange-50 opacity-100" />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Play Like a Pro.
            </span>
            <br />
            <span className="text-gray-900">Look Like Royalty.</span>
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8 animate-pulse" />
          <p className="text-xl md:text-2xl text-gray-700 mb-12">
            Premium sportswear for champions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate?.('products')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:scale-105 transition-all duration-300"
            >
              Shop Collection
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="w-full sm:w-auto px-8 py-4 border-2 border-red-500 rounded-lg font-bold text-lg hover:bg-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} className="text-red-500" />
        </div>
      </section>

  <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group transform-gpu"
                style={{
                  transform:
                    hoveredCategory === category.name
                      ? 'rotateY(5deg) rotateX(5deg) scale(1.03)'
                      : 'rotateY(0deg) rotateX(0deg)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  ...(isMd ? { animation: 'float 3s ease-in-out infinite', animationDelay: `${index * 0.12}s` } : {}),
                }}
              >
                {/* background image fills the card */}
                <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />

                {/* subtle gradient overlay that appears on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500 z-10 rounded-2xl`}
                />

                {/* content on top of the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-gray-900 px-6">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {/* decorative small image/icon retained if needed */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-black/30 flex items-center justify-center backdrop-blur-sm">
                      <img src={category.image} alt={`${category.name} icon`} className="w-full h-full object-cover rounded-lg opacity-90" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2 drop-shadow-md">
                    {category.name}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* border outline on top */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-2xl transition-all duration-500 z-30" />
              </div>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4">
            New{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Arrivals
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_20px_rgba(239,68,68,0.12)] transition-all duration-500 transform hover:scale-105 border border-gray-100"
              >
                <div className="aspect-square bg-gray-50 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                    <button className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <img src={soccerball} alt="decor" className="w-3/4 h-3/4 object-cover opacity-20 animate-pulse" />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-black mb-6">
              Where{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Passion
              </span>{' '}
              Meets{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Precision
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mb-8" />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Dink Sports Wear, we believe that every athlete deserves gear
              that performs as hard as they do. Our collection combines
              cutting-edge technology with timeless design.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From the field to the streets, we empower athletes to push their
              limits and redefine what's possible.
            </p>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
