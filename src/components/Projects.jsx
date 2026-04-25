import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { name: 'NOISE', category: 'Product Launch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
    { name: 'BOAT', category: 'Campaign', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
    { name: 'MAMAEARTH', category: 'Influencer Campaign', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800' },
    { name: 'TVS', category: 'Brand Film', img: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800' },
    { name: 'DR. SHETH\'S', category: 'Content Series', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800' },
    { name: 'BELLA VITA', category: 'Performance Ads', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section id="our-work" className="our-work section-black">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label text-orange"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            OUR WORK —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Work that speaks for us.
          </motion.h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-img">
                <motion.img
                  src={project.img}
                  alt={project.name}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    VIEW CASE STUDY
                  </motion.span>
                </motion.div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-more">
          <button className="btn-outline">VIEW FULL PORTFOLIO</button>
        </div>
      </div>

      <style jsx>{`
        .our-work {
          padding: 120px 0;
          background-color: #0A0A0A;
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
          color: var(--primary-orange);
        }

        h2 {
          font-size: 42px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }

        .project-item {
          cursor: pointer;
        }

        .project-img {
          position: relative;
          height: 250px;
          overflow: hidden;
          margin-bottom: 15px;
          border-radius: 12px;
        }

        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          filter: grayscale(1);
        }

        .project-item:hover .project-img img {
          transform: scale(1.1);
          filter: grayscale(0);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 77, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.4s ease;
        }

        .project-item:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay span {
          color: white;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .project-info h3 {
          font-size: 14px;
          margin-bottom: 5px;
        }

        .project-info p {
          font-size: 12px;
          color: #888;
        }

        .view-more {
          text-align: center;
        }

        .btn-outline {
          padding: 12px 30px;
          border: 1px solid #333;
          background: transparent;
          color: white;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: 0.3s;
        }

        .btn-outline:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
