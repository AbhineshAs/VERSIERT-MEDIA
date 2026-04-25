import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const posts = [
    {
      title: 'The Future of AI in Digital Marketing',
      date: 'Oct 12, 2025',
      category: 'STRATEGY',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Mastering Google Ads: A 2025 Guide',
      date: 'Oct 08, 2025',
      category: 'ADVERTISING',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
      title: 'Why Brand Storytelling Matters More Than Ever',
      date: 'Oct 05, 2025',
      category: 'CREATIVE',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop'
    },
    {
      title: 'Conversion Rate Optimization Secrets',
      date: 'Sep 28, 2025',
      category: 'CRO',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    }
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
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 100px)', marginBottom: '60px' }}>
          Insights & <span className="text-orange" style={{ fontStyle: 'italic' }}>Ideas</span>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ borderRadius: '24px', overflow: 'hidden', height: '250px', marginBottom: '20px' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '10px' }}>
                <span className="text-orange" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>{post.category}</span>
                <span style={{ color: 'var(--text-grey)', fontSize: '12px' }}>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '24px', lineHeight: '1.3' }}>{post.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;
