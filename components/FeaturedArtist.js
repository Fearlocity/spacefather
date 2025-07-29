import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedArtist() {
  return (
    <motion.section
      style={{
        width: '100%',
        padding: '3rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #6c3483 0%, #000 60%, #23235b 100%)',
        color: '#fff',
      }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Artist of the Month</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24 }}>
        <img src="/artist.jpg" alt="Featured Artist" style={{ width: 128, height: 128, borderRadius: '50%', objectFit: 'cover', border: '4px solid #6c3483', boxShadow: '0 4px 24px #0008' }} />
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 4 }}>DJ Nebula</div>
          <div style={{ marginBottom: 8, color: '#c3a6e8' }}>Electronic / Chillwave</div>
          <p style={{ maxWidth: 400 }}>DJ Nebula blends cosmic beats with soulful melodies, creating immersive soundscapes. Catch their exclusive set this month on Spacefather!</p>
        </div>
      </div>
    </motion.section>
  );
}
