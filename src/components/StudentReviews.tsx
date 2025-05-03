import React from 'react';
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Custom arrow components for slider
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

const StudentReviews: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const studentReviews = [
    {
      name: "Nandhini",
      score: "1580/1600",
      university: "Harvard University",
      // image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2hs",
      image: "/my_images/girl.jpg",
      review: "IITuitions provided personalized one-on-one coaching that transformed my SAT preparation. Their mock test system prepared me thoroughly for the actual exam. The faculty's dedication and the unlimited hours of support ensured I was fully prepared. I couldn't have achieved my Harvard dream without them!"
    },
    {
      name: "Sri Charan",
      score: "1550/1600",
      university: "Princeton University",
      // image: "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      image: "my_images/sri_harsha.jpg",
      review: "IITuitions offers plenty of one-on-one time with expert faculty. Their approach helped me improve from 1320 to 1550 and achieve a near-perfect score. The personalized study plan was tailored to my strengths and weaknesses, and the regular progress tracking kept me motivated throughout my preparation journey."
    },
    {
      name: "Tanishqa",
      score: "1540/1600",
      university: "Stanford University",
      image: "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review: "IITuitions has very dedicated faculty who made me realize the importance of mock tests that played a crucial role in my high score. The study materials were comprehensive and focused on the most important topics. The alumni network also provided valuable insights about university applications and interviews."
    },
    {
      name: "Arjun",
      score: "1570/1600",
      university: "Yale University",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review: "IITuitions' regular parent updates kept my family informed of my progress. Their focus on reaching 1500+ in practice tests before taking the SAT gave me confidence. The teachers were always available for doubt-clearing sessions, and their strategy of breaking down complex problems into simpler parts helped me master the most challenging questions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-navy-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title text-white">
            Our <span className="text-accent-400">Student</span> Success Stories
          </h2>
          <p className="section-subtitle text-gray-300">
            Read about the experiences of students who achieved their dream scores and university admissions
          </p>
        </div>

        <div className="px-8 animate-on-scroll">
          <Slider {...sliderSettings}>
            {studentReviews.map((student, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-800 h-full">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gray-100 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                        <p className="text-primary-600 font-medium mb-3">{student.university}</p>
                        <div className="flex items-center mb-4">
                          <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                          <span className="font-bold text-yellow-500">{student.score}</span>
                        </div>
                        <p className="text-gray-700">"{student.review}"</p>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href="#registration" 
                          className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center"
                        >
                          Start Your Success Story
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <div className="h-full">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;