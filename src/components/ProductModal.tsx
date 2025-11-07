import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ProductModalProps {
  product: any;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-6xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-red-500 shadow-[0_0_60px_rgba(239,68,68,0.4)] animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-red-500 transition-all duration-300 hover:rotate-90 transform"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10" />

            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-500 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}

            <div className="relative text-[12rem] animate-float">
              {product.emoji}
            </div>
          </div>

          <div className="flex flex-col justify-between py-4">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-sm font-bold mb-4">
                {product.category}
              </div>
              <h2 className="text-5xl font-black mb-4">{product.name}</h2>
              <p className="text-xl text-gray-300 mb-6">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  Performance Stats
                </h3>
                <div className="space-y-4">
                  {product.stats.map((stat: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {stat.name}
                        </span>
                        <span className="text-red-500 font-bold">
                          {stat.value}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-progress"
                          style={{
                            width: `${stat.value}%`,
                            animation: 'progress 1s ease-out forwards',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Price</p>
                  <p className="text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:scale-105 transition-all duration-300">
                  View Details
                </button>
                <button className="px-6 py-4 border-2 border-red-500 rounded-xl font-bold hover:bg-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transform hover:scale-105 transition-all duration-300">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
