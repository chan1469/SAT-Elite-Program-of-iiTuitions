import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-accent-400 mr-2" />
              <span className="text-2xl font-bold">
                <span className="text-accent-400">II</span>Tuitions
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Helping students achieve 1500+ SAT scores and gain admission to the world's most prestigious universities since 2010.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/share/reel/_--MCAVPX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-900 p-2 rounded-full hover:bg-primary-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#results" className="text-gray-400 hover:text-white transition-colors">
                  Student Results
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#faculty" className="text-gray-400 hover:text-white transition-colors">
                  Our Faculty
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-white transition-colors">
                  Student Community
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-400 hover:text-white transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  SAT Elite Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  SAT Foundation Course
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  SAT Math Intensive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  SAT Verbal Excellence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  College Application Guidance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Summer SAT Bootcamp
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <a href="tel:+919010031000" className="text-gray-400 hover:text-white transition-colors">
                  +91 9010031000
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <a href="mailto:iituitions001@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  iituitions001@gmail.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0 mt-1" />
                <address className="text-gray-400 not-italic">
                  iiTuitions Hub LLP, <br />
                  Nallagandla, Hyderabad 500019, <br />
                  India
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} IITuitions. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;