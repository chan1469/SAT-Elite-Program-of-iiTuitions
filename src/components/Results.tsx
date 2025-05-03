import React from 'react';
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center focus:outline-none"
      onClick={onClick}
    >
      <ChevronLeft className="h-6 w-6 text-gray-600" />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center focus:outline-none"
      onClick={onClick}
    >
      <ChevronRight className="h-6 w-6 text-gray-600" />
    </button>
  );
};

const Results: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const resultData = [
    {
      name: "Nandini",
      score: "1580/1600",
      image: "/my_images/result1.jpg",
      university: "Harvard",
      testimonial: "IITuitions provided personalized one-on-one coaching that transformed my SAT preparation. Their mock test system and unlimited hours of support ensured I was fully prepared."
    },
    {
      name: "Sri Harsha",
      score: "1550/1600",
      image: "/my_images/result3.jpg",
      university: "Princeton",
      testimonial: "IITuitions offers plenty of one-on-one time with expert faculty. Their approach helped me improve from 1320 to 1550 and achieve a near-perfect score."
    },
    {
      name: "Tanishqa",
      score: "1540/1600",
      image: "/my_images/result2.jpg",
      university: "Stanford",
      testimonial: "IITuitions has very dedicated faculty who made me realize the importance of mock tests that played a crucial role in my high score."
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-primary-900 to-navy-900">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title text-white">
            Our <span className="text-accent-400">Stellar</span> Results
          </h2>
          <p className="section-subtitle text-gray-300">
            IITuitions has consistently helped students achieve top SAT scores and gain admission to the world's most prestigious universities.
          </p>
        </div>

        <div className="mb-20 animate-on-scroll">
          <Slider {...sliderSettings} className="results-slider px-4">
            {resultData.map((result, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-300 hover:-translate-y-2">
                  <div className="h-64 bg-gray-200 relative">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white text-xl font-bold">{result.name}</h3>
                      <div className="flex items-center text-white">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="font-bold text-yellow-400">{result.score}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="ml-2 font-semibold text-gray-800">{result.university} University</span>
                      </div>
                    </div>
                    <p className="text-gray-600">"{result.testimonial}"</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center max-w-4xl mx-auto animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to be our next success story?</h3>
          <p className="mb-6 text-white/90">
            Join our SAT Elite Program and get on the path to achieving your dream score and university admission.
          </p>
          <a href="#registration" className="btn-accent">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;