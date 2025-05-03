import React from 'react';
import { Star } from 'lucide-react';

const ParentReviews: React.FC = () => {
  const reviews = [
    {
      name: "Rajeshwari",
      childName: "Aarav",
      childScore: "1570",
      childUniversity: "Stanford",
      rating: 5,
      review: "Our son had always been good at academics but was struggling with the SAT format. IITuitions' methodical approach and personalized attention transformed his preparation. The faculty was extremely dedicated and responsive. The 1:1 sessions helped identify his weak areas and work on them systematically. We are eternally grateful to IITuitions for helping our son secure a spot at Stanford!",
      // image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      image: "my_images/re1.png", 
    },
    {
      name: "Meera Patel",
      childName: "Sanya",
      childScore: "1540",
      childUniversity: "Princeton",
      rating: 5,
      review: "We tried several SAT coaching institutes before finding IITuitions, and I can confidently say they are in a league of their own. The regular progress reports and parent meetings kept us informed about our daughter's improvement. Their mock tests are incredibly accurate, and the detailed analysis helped Sanya focus on her weak areas. The unlimited doubt-solving sessions were a game-changer during the final weeks of preparation!",
      // image: "https://images.pexels.com/photos /1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      image:"my_images/re2.png",
    },
    {
      name: "anjali",
      childName: "Vikram",
      childScore: "1580",
      childUniversity: "Harvard",
      rating: 5,
      review: "When we enrolled our son at IITuitions, we were impressed by their commitment to excellence. They didn't just promise results; they had a clear roadmap to achieve them. The faculty's expertise is unmatched, and their teaching methods are innovative and effective. The regular mock tests prepared my son not just academically but also mentally for the actual exam. The result? A stunning 1580 and an acceptance letter from Harvard with a substantial scholarship!",
      // image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      image:"my_images/re3.png",
    }
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title">
            What <span className="text-primary-600">Parents</span> Say
          </h2>
          <p className="section-subtitle">
            Hear from parents whose children achieved their SAT dreams with IITuitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="review-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-gray-600 text-sm">Parent</p>
                  <div className="flex items-center mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 relative z-10">
                "{review.review}"
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Child's Score:</span>
                  <span className="text-primary-600 font-bold">{review.childScore}/1600</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">University:</span>
                  <span className="text-primary-600 font-bold">{review.childUniversity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentReviews;