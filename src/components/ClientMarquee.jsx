import React from 'react';

const ClientMarquee = () => {
  const clients = [
    "NOISE", "BOAT", "MAMAEARTH", "TVS", "DR. SHETH'S",
    "BELLA VITA", "LENSKART", "CRED", "SWIGGY", "ZOMATO"
  ];

  return (
    <div className="client-marquee-container">
      <div className="marquee-content">
        {/* Double the list to create a seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="client-item">
            {client}
            <span className="client-separator">•</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .client-marquee-container {
          width: 100%;
          padding: 60px 0;
          background: #000;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }

        .client-item {
          display: inline-flex;
          align-items: center;
          font-size: 24px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 0 30px;
          transition: color 0.3s ease;
        }

        .client-item:hover {
          color: #fff;
        }

        .client-separator {
          color: var(--primary-orange, #FF4D00);
          margin-left: 60px;
          font-size: 24px;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Translate by 50% since we doubled the array elements */
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .client-item {
            font-size: 18px;
            padding: 0 20px;
          }
          .client-separator {
            margin-left: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientMarquee;
