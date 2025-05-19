import React from 'react';
import { Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Muslich Wahyu Romadhon. Hak Cipta Dilindungi.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/muslichwr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Github"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://instagram.com/muslichwr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;