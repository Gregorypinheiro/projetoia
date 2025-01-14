import React from 'react';
import { ArrowRight, Tool, Paintbrush, Wrench, Droplet } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold">Tudo para sua construção em um só lugar!</h1>
            <p className="text-xl max-w-2xl">
              Encontre os melhores materiais de construção com preços imbatíveis e 
              atendimento especializado.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2">
              <span>Veja Mais</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Categorias em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Tool, name: 'Ferramentas' },
            { icon: Paintbrush, name: 'Tintas' },
            { icon: Wrench, name: 'Elétrica' },
            { icon: Droplet, name: 'Hidráulica' }
          ].map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <category.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              <p className="text-gray-600 mt-2">Explore nossa seleção de produtos</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Produtos em Promoção</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=400`}
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm text-blue-600 font-semibold">Em promoção</div>
                  <h3 className="text-lg font-semibold mt-1">Furadeira Profissional</h3>
                  <div className="mt-2 space-y-1">
                    <span className="text-gray-500 line-through">R$ 399,90</span>
                    <div className="text-2xl font-bold text-gray-900">R$ 299,90</div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Comprar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100`}
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">João Silva</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Excelente atendimento e produtos de qualidade. Sempre encontro tudo o que preciso para minhas obras aqui!"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;