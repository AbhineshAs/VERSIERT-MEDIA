import React from 'react';
import { motion } from 'framer-motion';
import TiltImage from '../components/TiltImage';

const AboutPage = () => {
  const team = [
    { name: 'Alex Rivera', role: 'Creative Director', img: '/team1.png' },
    { name: 'Sarah Chen', role: 'Head of Strategy', img: '/team2.png' },
    { name: 'Marcus Thorne', role: 'Technical Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Elena Vance', role: 'Brand Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px' }}
    >
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.1', marginBottom: '40px' }}>
              We are a team of <span className="text-orange">visionaries</span> and <span style={{ fontStyle: 'italic' }}>growth</span> experts.
            </h1>
            <p style={{ color: 'var(--text-grey)', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
              Orange Space was founded on the principle that digital marketing should be transparent, data-driven, and above all, effective. We don't just provide services; we build partnerships.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700' }}>10+</div>
                <div style={{ color: 'var(--text-grey)', fontSize: '14px' }}>YEARS EXP</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700' }}>50+</div>
                <div style={{ color: 'var(--text-grey)', fontSize: '14px' }}>EXPERTS</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700' }}>200+</div>
                <div style={{ color: 'var(--text-grey)', fontSize: '14px' }}>HAPPY CLIENTS</div>
              </div>
            </div>
          </motion.div>
          <div style={{ position: 'relative' }}>
            <TiltImage 
              src="/office.png" 
              alt="Agency Office" 
              style={{ width: '100%', aspectRatio: '4/5' }}
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              style={{ 
                position: 'absolute', 
                top: '-20px', 
                right: '-20px', 
                width: '120px', 
                height: '120px', 
                background: 'var(--primary-orange)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                color: 'white',
                zIndex: 2,
                boxShadow: '0 10px 30px rgba(255, 85, 0, 0.4)'
              }}
            >
              EST 2015
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" style={{ backgroundColor: '#000' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '20px' }}>Meet the <span className="text-orange" style={{ fontStyle: 'italic' }}>Team</span></h2>
          <p style={{ color: 'var(--text-grey)', maxWidth: '600px', margin: '0 auto' }}>The minds behind the growth. A diverse team of specialists dedicated to your success.</p>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ marginBottom: '25px', position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
                <TiltImage 
                  src={member.img} 
                  alt={member.name} 
                  style={{ width: '100%', aspectRatio: '1/1' }}
                />
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>{member.name}</h3>
              <p style={{ color: 'var(--primary-orange)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <h2 style={{ fontSize: '48px', textAlign: 'center', marginBottom: '60px' }}>Our Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { t: 'Transparency', d: 'No hidden agendas. We share everything, from successes to setbacks.' },
            { t: 'Innovation', d: 'We constantly test new tools and strategies to keep our clients ahead.' },
            { t: 'Impact', d: 'We focus on metrics that matter: revenue, profit, and growth.' },
            { t: 'Collaboration', d: 'Your success is our success. We work as an extension of your team.' }
          ].map((v, i) => (
            <motion.div 
              key={i} 
              className="glass" 
              style={{ padding: '30px', borderRadius: '20px' }}
              whileHover={{ y: -10, borderColor: 'var(--primary-orange)' }}
            >
              <h3 style={{ marginBottom: '15px' }}>{v.t}</h3>
              <p style={{ color: 'var(--text-grey)', fontSize: '14px' }}>{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          div[style*="gridTemplateColumns: '1.2fr 0.8fr'"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}} />
    </motion.div>
  );
};

export default AboutPage;
