import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQ[] = [
    {
      question: "What makes IITuitions different from other SAT coaching centers?",
      answer: "IITuitions offers personalized 1:1 coaching with expert faculty having 13+ years of experience. Unlike other centers with fixed course durations, we provide unlimited support until you achieve your target score. Our methodology is focused on detailed analytics, regular mock tests, and personalized study plans. Additionally, we offer access to our exclusive alumni network of successful students at top universities worldwide."
    },
    {
      question: "How long does the SAT preparation program typically last?",
      answer: "We don't believe in fixed durations as every student is unique. Our programs typically range from 3-6 months based on the student's starting level and target score. However, we provide unlimited support until the student achieves their target score, regardless of how long it takes. What matters to us is your success, not a rigid timeline."
    },
    {
      question: "Do you guarantee a 1500+ score on the SAT?",
      answer: "Yes, we are confident in our methodology and have a proven track record of helping 98% of our students achieve 1500+ scores. Our approach involves regular mock tests and personalized learning plans. We continue working with students until they consistently score 1500+ on our simulated tests before they take the actual SAT."
    },
    {
      question: "How are the classes conducted?",
      answer: "All classes are conducted in a 1:1 format, either online or in-person based on your preference and location. This ensures personalized attention and allows us to tailor the teaching approach to your specific learning style. Each session is interactive, with dedicated time for doubt clearing and practice."
    },
    {
      question: "What study materials will be provided?",
      answer: "We provide comprehensive study materials including our proprietary question banks, formula sheets, vocabulary lists, and strategy guides. Students also receive access to our digital learning platform with video lessons, practice quizzes, and performance analytics. All materials are regularly updated to reflect the latest SAT patterns and trends."
    },
    {
      question: "How do you monitor student progress?",
      answer: "We conduct weekly mock tests that simulate the actual SAT environment. Each test is followed by a detailed analysis identifying strengths and areas for improvement. Parents receive regular progress reports and are invited to scheduled consultation sessions with our faculty to discuss their child's development and next steps."
    },
    {
      question: "What is the fee structure for the program?",
      answer: "Our fee structure varies based on the program duration and specific requirements. We offer flexible payment options including installment plans. During the free consultation session, we'll assess your needs and provide a detailed quote. We also offer scholarships for deserving students based on their academic performance and financial need."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title">
            Frequently <span className="text-primary-600">Asked</span> Questions
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our SAT coaching programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-5 bg-white flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#registration" 
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;