import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import ScrollLink from './ui/ScrollLink';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="home" className="relative min-h-[90vh] flex flex-col">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600 mr-3" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              Team Hobe
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <ScrollLink 
              to="about" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </ScrollLink>
            <ScrollLink 
              to="background" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Background
            </ScrollLink>
            <ScrollLink 
              to="gallery" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </ScrollLink>
            <ScrollLink 
              to="methodology" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Methodology
            </ScrollLink>
            <ScrollLink 
              to="results" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Results
            </ScrollLink>
            <ScrollLink 
              to="test" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Test
            </ScrollLink>
            <ScrollLink 
              to="code" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Code
            </ScrollLink>
            <ScrollLink 
              to="future" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Future
            </ScrollLink>
            <ScrollLink 
              to="references" 
              className={`font-medium hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              References
            </ScrollLink>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Brain Tumor Segmentation and Multi-Class Classification using Deep Neural Network
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl font-light">
            Automating brain tumor detection and classification with AI for faster, more accurate diagnoses.
          </p>
          <ScrollLink 
            to="about" 
            className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            Learn More
          </ScrollLink>
        </div>
      </div>
    </header>
  );
};

export default Header;