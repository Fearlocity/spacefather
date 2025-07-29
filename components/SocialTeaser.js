import React from 'react';
import { motion } from 'framer-motion';

export default function SocialTeaser() {
  return (
    <motion.section
      style={{
        width: '100%',
        padding: '3rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#000',
        color: '#fff',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 8 }}>Join the Spacefather Network</h2>
      <p style={{ marginBottom: 16, maxWidth: 480, textAlign: 'center' }}>Connect with artists and fans, share your music, and join groups. Our social feed is launching soon!</p>
      <div style={{ display: 'flex', gap: 16 }}>
        <a href="/social" style={{ padding: '0.5rem 1.5rem', background: '#6c3483', color: '#fff', borderRadius: 999, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}>Preview Social Feed</a>
      </div>
    </motion.section>
  );
}
