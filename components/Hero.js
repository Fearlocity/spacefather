import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #000 0%, #22223b 60%, #6c3483 100%)',
        color: '#fff',
        position: 'relative',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textShadow: '0 2px 16px #000' }}>Featured Track</h1>
      <div style={{ width: '60%', marginBottom: '2rem', boxShadow: '0 8px 32px #0008', borderRadius: 16, overflow: 'hidden', background: '#181846', pointerEvents: 'auto' }}>
        <ReactPlayer
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls={true}
          width="100%"
          height="450px"
        />
      </div>
      <p style={{ fontSize: '1.25rem', maxWidth: 600, textAlign: 'center', marginBottom: '1rem' }}>
        Experience the latest from our top artist. Listen, share, and join the movement.
      </p>
      <a href="#event-preview" style={{ marginTop: 16, padding: '0.75rem 2rem', background: '#6c3483', color: '#fff', borderRadius: 999, fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}>See Upcoming Events</a>
    </motion.section>
  );
}
