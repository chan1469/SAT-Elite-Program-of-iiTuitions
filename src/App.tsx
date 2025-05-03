import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Features from './components/Features';
import Faculty from './components/Faculty';
import CommunitySection from './components/CommunitySection';
import ParentReviews from './components/ParentReviews';
import StudentReviews from './components/StudentReviews'; 
import ComparisonSection from './components/ComparisonSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FAQSection from './components/FAQSection';

function App() {
  useEffect(() => {
    // Animation for elements when they enter viewport
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Results />
      <ComparisonSection />
      <Features />
      <StudentReviews />
      <Faculty />
      <ParentReviews />
      <CommunitySection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;