import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title">
            Why <span className="text-primary-600">IITuitions</span> Transforms SAT Preparation
          </h2>
          <p className="section-subtitle">
            See how our elite program compares to conventional SAT coaching approaches
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12 relative animate-on-scroll">
          {/* IITuitions Column */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-primary-500">
            <div className="bg-primary-600 py-6 px-4 text-center">
              <h3 className="text-white text-2xl font-bold">IITuitions</h3>
              <p className="text-white/80 text-sm uppercase tracking-wider font-medium">THE ELITE CHOICE</p>
            </div>
            
            <div className="p-2">
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Unlimited Hours Until Success</h4>
                  <p className="text-gray-600 text-sm">No arbitrary time limits - we commit to your success regardless of how long it takes</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Exclusive 1:1 Personal Mentorship</h4>
                  <p className="text-gray-600 text-sm">Your child receives undivided attention from elite tutors who understand their unique needs</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Regular Parent-Teacher Meetings</h4>
                  <p className="text-gray-600 text-sm">Stay fully informed with scheduled consultations about your child's progress and next steps</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">1500+ Score Guarantee</h4>
                  <p className="text-gray-600 text-sm">98% of our students achieve 1500+ scores, opening doors to the world's most prestigious universities</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Exclusive University Network Access</h4>
                  <p className="text-gray-600 text-sm">Your child connects directly with our successful alumni at Harvard, Stanford, MIT and other elite schools</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* VS Circle */}
          <div className="hidden lg:flex w-16 h-16 rounded-full bg-navy-900 text-white items-center justify-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white shadow-lg">
            VS
          </div>
          
          {/* Others Column */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 py-6 px-4 text-center">
              <h3 className="text-white text-2xl font-bold">Others</h3>
              <p className="text-white/80 text-sm uppercase tracking-wider font-medium">CONVENTIONAL APPROACH</p>
            </div>
            
            <div className="p-2">
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fixed Course Timeline</h4>
                  <p className="text-gray-600 text-sm">Limited 20-40 hour packages regardless of student needs</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Group Classes</h4>
                  <p className="text-gray-600 text-sm">One tutor handling 30+ students with minimal personal attention</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No Parent Involvement</h4>
                  <p className="text-gray-600 text-sm">Minimal communication with parents about student progress and development</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex border-b border-gray-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No Score Guarantee</h4>
                  <p className="text-gray-600 text-sm">No commitment to specific outcomes or results</p>
                </div>
              </div>
              
              <div className="py-4 px-4 flex">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No Alumni Connection</h4>
                  <p className="text-gray-600 text-sm">Missing valuable mentorship from successful students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto animate-on-scroll">
          <div className="text-4xl text-primary-200 absolute top-6 left-8 font-serif">"</div>
          <p className="text-lg text-gray-700 mb-4 relative z-10">
            My child struggled with standardized tests until we found IITuitions. Their unlimited support approach and personalized attention made all the difference. After scoring 1540 on the SAT, my daughter is now at Cornell with a scholarship!
          </p>
          <div className="flex items-center">
            <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-700 font-bold">PS</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Priya Sharma</p>
              <p className="text-sm text-gray-600">Parent of Cornell University Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;