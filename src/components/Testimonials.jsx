import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Versiert Media completely changed how our brand looks online. The content felt premium, professional, and actually brought us more customers.",
      author: "Manu Manohar",
      role: "Co-Founder, Kompetenzen Technologies"
    },
    {
      text: "The team understood our vision instantly and delivered content that matched our brand perfectly. Smooth process from start to finish.",
      author: "Harshad Harsi",
      role: "Director, Campfly Pvt Ltd"
    },
    {
      text: "Team Versiert has developed some nice videos for our marketing campaigns. They were very creative during the idea stage and very flexible during the execution phase. It was very easy to work with them, and overall, they delivered excellent value for money.",
      author: "Unnikrishnan",
      role: "Directorate, Greenovative Foods Pvt Ltd"
    },
    {
      text: "We saw a noticeable increase in engagement and inquiries after working with Versiert Media. Highly recommended for businesses serious about growth.",
      author: "Dr Niyas Nazeer Sait",
      role: "Founder, Intalign Aligners and Bracers"
    },
    {
      text: "Creative, fast, and professional. Every video and campaign they delivered exceeded our expectations.",
      author: "PRO",
      role: "Kerala State Electricity Board"
    },
    {
      text: "Their storytelling and content strategy helped us stand out in a crowded market. One of the best creative teams we’ve worked with.",
      author: "Gokul",
      role: "CEO, Scipy Technologies"
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
          padding: 80px 0;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
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
          flex: 0 0 380px;
          width: 380px;
          min-width: 380px;
          max-width: 380px;
          min-height: 380px;
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
          white-space: normal;
          word-wrap: break-word;
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
            padding: 60px 0;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .review-card {
            flex: 0 0 300px;
            width: 300px;
            min-width: 300px;
            max-width: 300px;
            min-height: 340px;
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
