import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 size={32} />
              <span className="text-xl font-bold">ConstruMais</span>
            </div>
            <p className="text-gray-400">
              Sua loja completa de materiais de construção, com mais de 20 anos de experiência no mercado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Produtos</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white">Promoções</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-gray-400" />
                <span className="text-gray-400">(11) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-gray-400" />
                <span className="text-gray-400">contato@construmais.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={20} className="text-gray-400" />
                <span className="text-gray-400">Av. Principal, 1000 - São Paulo</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ConstruMais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;