import React from 'react';
import { Award, BookOpen, CheckCircle, Users, Clock } from 'lucide-react';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: "Dr. Ravi Kumar",
      position: "Mathematics Expert",
      experience: "13+ years",
      education: "Ph.D. Mathematics, IIT Delhi",
      // image: "https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      image: "my_images/prof.png",
      achievements: [
        "Trained 250+ students to achieve 800/800 in SAT Math",
        "Developed proprietary formula shortcuts for SAT problem-solving",
        "Author of 'SAT Math Mastery' practice book"
      ]
    },
    {
      name: "Prof. Anjali Mehta",
      position: "English & Reading Expert",
      experience: "13+ years",
      education: "Masters in English Literature, Oxford University",
      // image: "https://images.pexels.com/photos/8363042/pexels-photo-8363042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      image: "my_images/prof2.png",
      achievements: [
        "Specialized in SAT Critical Reading and Writing sections",
        "Developed custom vocabulary enhancement techniques",
        "Former admissions consultant for US universities"
      ]
    },
    {
      name: "Mr. Vikram Singh",
      position: "Program Director",
      experience: "14+ years",
      education: "MBA, Harvard Business School",
      // image: "https://images.pexels.com/photos/5998516/pexels-photo-5998516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      image: "my_images/prof3.png",
      achievements: [
        "Oversees personalized learning program development",
        "Created the 5-stage SAT preparation methodology",
        "Conducted workshops at 50+ premier schools across India"
      ]
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-navy-950 text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-2 bg-accent-400/20 rounded-full text-accent-400 font-semibold mb-4">
            Limited Seats Available
          </div>
          <p className="text-lg text-accent-300 mb-6">
            Expert faculty members are always limited - Secure your spot before they're full!
          </p>
          <h2 className="section-title text-white">
            Learn from India's Most <span className="text-accent-400">Exclusive</span> SAT Faculty
          </h2>
          <p className="section-subtitle text-gray-300">
            Our hand-picked experts with 13+ years of teaching excellence accept only a limited number of students each year
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={index}
              className="bg-navy-900/50 rounded-xl overflow-hidden shadow-lg animate-on-scroll transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-full h-full object-contain" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 to-transparent p-4">
                  <h3 className="text-xl font-bold">{faculty.name}</h3>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-accent-400 mr-1" />
                    <span className="text-sm text-gray-300">{faculty.position}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-accent-400 mr-2" />
                  <span className="font-medium">{faculty.experience} Experience</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Education</div>
                  <div className="text-white">{faculty.education}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Key Achievements</div>
                  <ul className="space-y-2">
                    {faculty.achievements.map((achievement, i) => (
                      <li key={i} className="flex">
                        <CheckCircle className="h-5 w-5 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-navy-900/70 rounded-xl p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <Users className="h-12 w-12 text-accent-400 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-1">Limited Batch Size</h3>
                <p className="text-gray-300">Only 8 students per expert faculty member to ensure personalized attention</p>
              </div>
            </div>
            <div className="bg-navy-800/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Available Seats</span>
                <span className="text-accent-400 font-bold">5 remaining</span>
              </div>
              <div className="w-full bg-navy-700 rounded-full h-2">
                <div className="bg-accent-400 h-2 rounded-full" style={{width: '35%'}}></div>
              </div>
            </div>
          </div>

          <div className="bg-navy-900/70 rounded-xl p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <Clock className="h-12 w-12 text-accent-400 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-1">Next Batch Starting Soon</h3>
                <p className="text-gray-300">Reserve your spot now for personalized SAT excellence journey</p>
              </div>
            </div>
            <a href="#registration" className="btn-accent w-full text-center">
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;