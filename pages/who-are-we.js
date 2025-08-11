
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const brandStory = `
## Our Brand Story

Spacefather was founded to empower independent artists, creators, and fans worldwide. Our mission is to provide a platform where music, podcasts, and events unite communities and foster creativity. We believe in the power of connection, diversity, and artistic freedom.
`;

const membershipBenefits = `
## Membership Benefits

- Access to exclusive events and live streams
- Early access to new music and podcasts
- Community forums and group creation
- Discounts on event tickets and merchandise
- Opportunities to collaborate and showcase your work
`;

export default function WhoAreWe() {
  return (
    <>
      <NextSeo title="Who Are We – Spacefather" description="Learn about our brand story and membership benefits." />
      <Navbar />
      <main style={{ paddingTop: 80, minHeight: '100vh', background: 'linear-gradient(135deg, #000 0%, #22223b 60%, #6c3483 100%)', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', textShadow: '0 2px 16px #000' }}>Who Are We</h1>
          <ReactMarkdown>{brandStory}</ReactMarkdown>
          <div style={{ height: 32 }} />
          <ReactMarkdown>{membershipBenefits}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
}
