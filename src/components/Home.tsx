import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 relative">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="block">Muslich Wahyu Romadhon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto my-6">
        Freshgraduate | Full Stack Web Developer | Pengajar
        </p>
        
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 transition-colors duration-300"
          >
            Lihat Proyek
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-600 text-white rounded-sm hover:bg-gray-800 transition-colors duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="p-2">
          <ChevronDown size={24} className="text-gray-400" />
        </a>
      </div>
      
      {/* Decorative element inspired by Japanese design */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 border-t-4 border-r-4 border-indigo-500 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 border-b-4 border-l-4 border-indigo-500 opacity-20"></div>
    </section>
  );
};

export default Home;