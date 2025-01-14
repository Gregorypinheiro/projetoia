import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 size={32} />
              <span className="text-xl font-bold">ConstruMais</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-96 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-blue-200">Produtos</Link>
            <Link to="/promotions" className="hover:text-blue-200">Promoções</Link>
            <Link to="/about" className="hover:text-blue-200">Sobre</Link>
            <Link to="/contact" className="hover:text-blue-200">Contato</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>

          <div className="md:hidden">
            <button className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;