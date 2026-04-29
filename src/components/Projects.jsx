import React from 'react';
import { motion } from 'framer-motion';
import projectVideo1 from '../assets/video_2026-04-28_11-01-02.mp4';
import projectVideo2 from '../assets/vid 3.mp4';
import projectVideo3 from '../assets/0916 (2)(1).mp4';
import projectVideo4 from '../assets/COOPER.mp4';

const Projects = () => {
  const projects = [
    { title: 'VERSIERT SHOWREEL', category: 'Brand Film', video: projectVideo1, desc: 'A cinematic showcase of our best work.' },
    { title: 'CAMPAIGN 01', category: 'Content Series', video: projectVideo2, desc: 'A modern brand experience built for dominance.' },
    { title: 'CAMPAIGN 02', category: 'Performance Ads', video: projectVideo3, desc: 'A modern brand experience built for dominance.' },
    { title: 'COOPER', category: 'Product Launch', video: projectVideo4, desc: 'A modern brand experience built for dominance.' }
  ];

  return (
    <section id="our-work" className="our-work">
      <div className="container">
        <div className="section-header">
          <span className="section-pre-title">OUR WORK</span>
          <h2 className="projects-title">Work that speaks for us.</h2>
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
                {project.video ? (
                  <video 
                    src={project.video} 
                    className="project-img" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                ) : (
                  <img src={project.image} alt={project.title} className="project-img" />
                )}
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
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
          padding: 80px 0;
          background-color: var(--bg-black);
          position: relative;
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

        .projects-title {
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 2px;
        }

        .projects-slider {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .project-slide {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px;
          display: flex;
          flex-direction: column;
          transition: 0.3s;
        }

        .project-slide:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-5px);
        }

        .project-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          margin-bottom: 25px;
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
          transform: scale(1.1);
        }

        .project-category {
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--text-grey);
          font-weight: 700;
          margin-bottom: 10px;
          display: block;
          text-transform: uppercase;
        }

        .project-name {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .project-desc {
          font-size: 12px;
          color: var(--text-grey-light);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .view-project-link {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #fff;
          text-decoration: none;
          opacity: 0.7;
          transition: 0.3s;
        }

        .view-project-link:hover {
          opacity: 1;
        }

        .section-number-container {
          position: absolute;
          left: 20px;
          bottom: 20px;
        }

        .section-number {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-grey);
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .projects-slider {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .our-work {
            padding: 60px 0;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .projects-slider {
            grid-template-columns: 1fr;
          }
          .section-number-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
