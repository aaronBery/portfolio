import React from 'react';
import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { name } = useApp();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
          <span>Made with</span>
          <Heart className="mx-1 text-red-500" size={16} />
          <span>in Brighton</span>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} {name}. All rights reserved.
        </p>
        
        <div className="mt-6">
          <ul className="flex space-x-6 text-sm">
            <li>
              <a 
                href="#about" 
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;