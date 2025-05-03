import React from 'react';
import { Users, MessageCircle, GraduationCap, Globe, UserPlus } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-accent-50 to-accent-100">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title">
            Join Our <span className="text-primary-600">Student Community</span>
          </h2>
          <p className="section-subtitle">
            Beyond SAT preparation, we build a strong community of achievers who support each other during and after the course
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Building Connections That Last a Lifetime</h3>
            
            <p className="text-gray-700 mb-6">
              At IITuitions, we believe that success extends beyond high test scores. Our unique approach focuses on building a strong student community where lifelong connections are formed with peers heading to the same prestigious universities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Peer Learning Networks</h4>
                  <p className="text-gray-600">
                    Study groups and collaborative sessions with like-minded ambitious students to enhance learning
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <GraduationCap className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alumni Mentorship</h4>
                  <p className="text-gray-600">
                    Direct guidance from our successful alumni currently studying at top universities worldwide
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Networking Opportunities</h4>
                  <p className="text-gray-600">
                    Connect with our international community of achievers at prestigious institutions
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <MessageCircle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community Support System</h4>
                  <p className="text-gray-600">
                    Access to private online groups where you can ask questions and get support from peers
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#registration" className="btn-primary">
              Join Our Community
            </a>
          </div>
          
          <div className="order-1 md:order-2 animate-on-scroll">
            <img 
              src="/my_images/community_img.PNG"
              alt="Student community"
              className="rounded-xl shadow-xl relative z-10" 
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-accent-100 rounded-full p-4">
              <UserPlus className="h-12 w-12 text-primary-600" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Exclusive Alumni Events</h3>
              <p className="text-gray-700 mb-4">
                Our commitment doesn't end when you finish the course or take the SAT. IITuitions organizes regular alumni meetups, webinars with successful graduates, and networking events that help our students build connections that last throughout their academic and professional careers. These relationships become invaluable when you're studying at the same prestigious institutions.
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/nandhini.jpg"
                  alt="Alumni mentor"
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <p className="font-semibold text-gray-900">Nandhini</p>
                  <p className="text-sm text-gray-600">Harvard University, Class of 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;