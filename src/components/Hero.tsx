import React from 'react';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 bg-gradient-to-b from-navy-950 to-navy-800 text-white min-h-screen flex items-center">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Path to <span className="text-accent-400">Ivy League</span> Success
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Join IITuitions' elite SAT program and achieve a 1500+ score with our proven methodology and experienced faculty.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Award className="text-accent-400 w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold">Proven Success Record</h3>
              </div>
              <p className="text-gray-200 mb-3">Our students have achieved:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-accent-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Outstanding 1500+ SAT scores consistently</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>$250,000 (₹2.1 Crores) in scholarships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-400 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Admissions to Harvard, Stanford, Princeton & more</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#results" className="btn-outline border-white text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                See Student Results
              </a>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary-500 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative z-10">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-4 px-6 text-white flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                <h3 className="text-lg font-bold">SAT Elite Program</h3>
              </div>
              <div className="p-6 bg-white text-gray-800">
                <div className="mb-4">
                  <h4 className="font-semibold text-navy-900 mb-2">What you'll get:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>1:1 Classes with Expert Faculty</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personalized Study Plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Weekly Mock Tests & Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 Doubt Clearing Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Exclusive Study Materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ivy League Application Guidance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Limited Spots Available</span>
                    <span className="text-red-600 font-medium">Only 5 left</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <a href="#registration" className="btn-primary w-full text-center">
                  Secure Your Spot Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;