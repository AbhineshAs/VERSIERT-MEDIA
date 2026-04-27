import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'LUXE STUDIO',
      category: 'E-COMMERCE WEBSITE',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'MODERN ARC',
      category: 'BRAND IDENTITY',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="our-work" className="our-work">
      <div className="container">
        <div className="section-header">
          <span className="section-pre-title">FEATURED WORK</span>
          <h2 className="projects-title">OUR WORK</h2>
        </div>

        <div className="projects-slider">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              className="project-slide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">A modern brand experience built for dominance.</p>
                <a href="#" className="view-project-link">VIEW PROJECT →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-number-container">
        <span className="section-number">.05</span>
      </div>

      <style jsx>{`
        .our-work {
          padding: 150px 0;
          background: #000;
          position: relative;
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

        .projects-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
        }

        .projects-slider {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-slide {
          width: 100%;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 60px;
        }

        .project-image-container {
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          transition: 0.5s;
        }

        .project-slide:hover .project-img {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .project-category {
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--text-grey);
          font-weight: 700;
          margin-bottom: 15px;
          display: block;
        }

        .project-name {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
        }

        .project-desc {
          font-size: 14px;
          color: var(--text-grey-light);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .view-project-link {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #fff;
          text-decoration: none;
        }

        .section-number-container {
          position: absolute;
          left: 5%;
          bottom: 5%;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey);
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .project-slide {
            grid-template-columns: 1fr;
            padding: 30px;
          }
          .project-image-container {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
