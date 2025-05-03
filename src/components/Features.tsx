import React from 'react';
import { Users, Calendar, BookOpen, Sparkles, Trophy, BarChart3, Clock, UserCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: "Customized Study Plans",
      description: "Tailored learning paths created for each student based on their strengths, weaknesses, and target universities."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "1:1 Personal Coaching",
      description: "Dedicated sessions with our expert faculty ensuring personalized attention and maximum improvement."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Weekly Progress Tracking",
      description: "Regular assessments and detailed progress reports to keep you informed about your performance and areas of improvement."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: "Mock Tests & Analysis",
      description: "Regular simulated tests that mirror the actual SAT exam, followed by in-depth performance analysis."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Unlimited Support Hours",
      description: "No arbitrary time limits - we commit to your success regardless of how long it takes."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary-600" />,
      title: "Parent Involvement",
      description: "Regular parent-teacher meetings to keep you updated on your child's progress and next steps."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary-600" />,
      title: "1500+ Score Guarantee",
      description: "Our proven methodology ensures that 98% of our students achieve stellar 1500+ scores on their SAT."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary-600" />,
      title: "University Networking",
      description: "Connect with our alumni at top universities like Harvard, Stanford, and Princeton for invaluable guidance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title">
            What Makes <span className="text-primary-600">IITuitions</span> Different
          </h2>
          <p className="section-subtitle">
            Our comprehensive approach to SAT preparation focuses on personalized attention, quality instruction, and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#registration" className="btn-primary">
            Experience the IITuitions Difference
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;