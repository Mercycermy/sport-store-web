import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isMd, setIsMd] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const categories = ['All', 'Footballs', 'Jerseys', 'Cleats', 'Accessories'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
  <div className="bg-white text-gray-900 pt-20 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-black text-center mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-4" />
          <p className="text-xl text-gray-600 text-center mb-12">
            Premium sportswear for every athlete
          </p>

          <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="text-red-500" size={24} />
              <h3 className="text-xl font-bold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setSelectedProduct(product)}
                className="group relative cursor-pointer"
                style={{
                  transform:
                    hoveredProduct === product.id
                      ? 'rotateY(15deg) rotateX(5deg) scale(1.05)'
                      : 'rotateY(0deg) rotateX(0deg) scale(1)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  ...(isMd ? { animation: 'float 3s ease-in-out infinite', animationDelay: `${index * 0.08}s` } : {}),
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 group-hover:border-red-500 transition-all duration-500 shadow-md hover:shadow-lg">
                  <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                          animation: hoveredProduct === product.id ? `float ${2 + i}s ease-in-out infinite` : 'none',
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}

                    <div
                      className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 overflow-hidden"
                      style={{
                        transform:
                          hoveredProduct === product.id
                            ? 'rotateY(30deg)'
                            : 'rotateY(0deg)',
                      }}
                    >
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
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
                      <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                      </button>
                    </div>

                    <div className="mt-4 space-y-2">
                      {product.stats.map((stat: any, index: number) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{stat.name}</span>
                            <span className="text-red-500 font-bold">
                              {stat.value}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width:
                                  hoveredProduct === product.id
                                    ? `${stat.value}%`
                                    : '0%',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
