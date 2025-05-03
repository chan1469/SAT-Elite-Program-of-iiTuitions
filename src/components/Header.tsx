import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600 mr-2" />
            <span className="text-2xl font-bold text-navy-900">
              <span className="text-primary-600">II</span>Tuitions
            </span>
          </div>
        </a>

        <div className="flex space-x-4">
          <a 
            href="https://forms.gle/mz3NV7PzeoFbcZ3s8" 
            className="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register For Free Session
          </a>
          <a 
            href="https://wa.me/918328331996?text=Hi,%20I'm%20interested%20in%20IITuitions%20SAT%20coaching.%20Please%20provide%20more%20information."
            className="btn-primary text-center"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Talk to Us Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#results" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="#features" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Offer
            </a>
            <a 
              href="#faculty" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Faculty
            </a>
            <a 
              href="#community" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#faq" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://wa.me/918328331996?text=Hi,%20I'm%20interested%20in%20IITuitions%20SAT%20coaching.%20Please%20provide%20more%20information." 
              className="btn-primary text-center"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Talk to Us Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;