import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import projectVideo1 from '../assets/video_2026-04-28_11-01-02.mp4';
import projectVideo2 from '../assets/vid 3.mp4';
import projectVideo3 from '../assets/0916 (2)(1).mp4';
import projectVideo4 from '../assets/COOPER.mp4';
import projectVideo5 from '../assets/White Track.mp4';
import projectVideo6 from '../assets/ISRL_Final Out.mp4';
import projectVideo7 from '../assets/2026-05-12 10.48.33.mp4';


const ProjectCard = ({ project, index }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="video-box">
        <video
          src={project.video}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="uncropped-video"
        />
        <button
          className="individual-mute-btn"
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
      <div className="project-details">
        <span className="p-cat">{project.category}</span>
        <h3 className="p-title">{project.title}</h3>
        <p className="p-desc">{project.desc}</p>
      </div>
    </motion.div>
  );
};

const Projects = ({ limit }) => {
  const allProjects = [
    { title: 'VERSIERT SHOWREEL', category: 'Brand Film', video: projectVideo1, desc: 'A cinematic showcase of our best work.' },
    { title: 'CAMPAIGN 01', category: 'Content Series', video: projectVideo2, desc: 'A modern brand experience built for dominance.' },
    { title: 'CAMPAIGN 02', category: 'Performance Ads', video: projectVideo3, desc: 'A modern brand experience built for dominance.' },
    { title: 'COOPER', category: 'Product Launch', video: projectVideo4, desc: 'A modern brand experience built for dominance.' },
    { title: 'WHITE TRACK', category: 'Product Launch', video: projectVideo5, desc: 'A modern brand experience built for dominance.' },
    { title: 'ISRL', category: 'Product Launch', video: projectVideo6, desc: 'A modern brand experience built for dominance.' },
    { title: 'COKE', category: 'Product Launch', video: projectVideo7, desc: 'A modern brand experience built for dominance.' }
  ];

  const displayProjects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section id="our-work" className="our-work">
      <div className="container">
        <div className="section-header">
          <span className="section-pre-title">OUR WORK</span>
          <h2 className="projects-title">Work that speaks for us.</h2>
        </div>

        <div className="projects-grid">
          {displayProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .our-work {
          padding: 100px 0;
          background: #000;
          color: #fff;
        }

        .section-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .section-pre-title {
          font-size: 11px;
          letter-spacing: 4px;
          color: #666;
          display: block;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .projects-title {
          font-size: 42px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .video-box {
          width: 100%;
          background: #0a0a0a;
          border-radius: 4px;
          overflow: hidden;
          line-height: 0;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          position: relative;
        }

        .uncropped-video {
          width: 100%;
          height: auto;
          display: block;
        }

        .individual-mute-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(4px);
          z-index: 10;
        }

        .individual-mute-btn:hover {
          background: #fff;
          color: #000;
          transform: scale(1.1);
        }

        .project-details {
          padding: 0 5px;
        }

        .p-cat {
          font-size: 10px;
          letter-spacing: 2px;
          color: #ff4d00;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: block;
        }

        .p-title {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .p-desc {
          font-size: 14px;
          color: #888;
          line-height: 1.6;
          max-width: 90%;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .projects-title {
            font-size: 32px;
          }
          
          .individual-mute-btn {
            bottom: 15px;
            right: 15px;
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
