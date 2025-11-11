import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'Youtube' },
  ];

  const quickLinks = [
    ['Shop', 'New Arrivals', 'Best Sellers', 'Sale'],
    ['About', 'Our Story', 'Team', 'Careers'],
    ['Support', 'Contact', 'FAQ', 'Shipping'],
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/photo_2025-11-07_10-07-11.jpg"
              alt="Dink Sports Wear"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-700 mb-6">
              Premium sportswear for champions. Elevate your game with Dink.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.12)]"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-700" />
                </button>
              ))}
            </div>
          </div>

          {quickLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {column[0]}
              </h3>
              <ul className="space-y-3">
                {column.slice(1).map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-gray-600 hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2025 Dink Sports Wear. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-red-500 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-red-500 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-red-500 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
