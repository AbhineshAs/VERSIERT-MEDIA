import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Versiert didn't just grow our social numbers; they changed our entire market perception. Truly elite.",
      author: "Kunal B.",
      role: "FinTech Founder"
    },
    {
      text: "The cinematic quality they bring to every single piece of content is unmatched in the industry.",
      author: "Elena R.",
      role: "Luxury Brand CEO"
    },
    {
      text: "Their strategic approach to our brand overhaul delivered results beyond our highest expectations.",
      author: "Rahul S.",
      role: "Tech Entrepreneur"
    },
    {
      text: "A true growth partner. They don't just execute, they elevate everything they touch.",
      author: "Sarah M.",
      role: "Marketing Director"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-pre-title">TRUSTED BY</span>
          <h2 className="testimonials-title">WORDS FROM THE LEADERS.</h2>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {/* Double the array for seamless scrolling */}
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card">
              <span className="quote-mark">"</span>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <h4>{review.author}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 150px 0;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-pre-title {
          font-size: 10px;
          letter-spacing: 4px;
          color: var(--text-grey);
          display: block;
          margin-bottom: 20px;
        }

        .testimonials-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
        }

        .marquee-content {
          display: flex;
          gap: 30px;
          padding: 0 15px;
          animation: marquee 30s linear infinite;
        }

        .review-card {
          flex: 0 0 320px;
          height: 320px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: 0.3s;
        }

        .review-card:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-5px);
        }

        .quote-mark {
          position: absolute;
          top: 30px;
          left: 30px;
          font-size: 60px;
          font-family: serif;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
        }

        .review-text {
          font-size: 16px;
          color: var(--text-grey);
          line-height: 1.6;
          margin-bottom: 20px;
          font-style: italic;
          position: relative;
          z-index: 1;
        }

        .review-author h4 {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 5px;
        }

        .review-author p {
          font-size: 12px;
          color: var(--text-grey-light);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Translate by 50% plus half the gap space to account for the duplication */
            transform: translateX(calc(-50% - 15px));
          }
        }

        @media (max-width: 768px) {
          .testimonials {
            padding: 100px 0;
          }
          .review-card {
            flex: 0 0 280px;
            height: 280px;
            padding: 30px 20px;
          }
          .review-text {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
