import React from 'react';

export default function EventPreview() {
  return (
    <section id="event-preview" style={{
      width: '100%',
      padding: '4rem 0',
      background: '#181846',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Upcoming Event</h2>
      <div style={{ background: '#23235b', borderRadius: 12, padding: '1.5rem', boxShadow: '0 4px 24px #0006', maxWidth: 420, width: '100%', marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>Spacefather Live: Virtual Festival</div>
        <div style={{ marginBottom: 8 }}>August 15, 2025 &bull; 7:00 PM EST</div>
        <div style={{ marginBottom: 16 }}>Join us for a night of music, podcasts, and community. Featuring top artists and exclusive interviews.</div>
        <a href="/events/register" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#6c3483', color: '#fff', borderRadius: 999, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}>Register Now</a>
      </div>
    </section>
  );
}
