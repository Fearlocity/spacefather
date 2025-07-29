import Link from 'next/link';
export default function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          letterSpacing: '0.15em',
          marginBottom: '0.5rem',
        }}
      >
        Spacefather
      </div>
      <div
        style={{
          display: 'flex',
          gap: '2.5rem',
          flexWrap: 'wrap',
          fontSize: '1rem',
          justifyContent: 'end',
          width: '100%',
          maxWidth: 1100,
          paddingRight: '2.5rem',
        }}
      >
        <Link href="/" legacyBehavior><a className="nav-link">Home</a></Link>
        <Link href="/who-are-we" legacyBehavior><a className="nav-link">Who Are We</a></Link>
        <Link href="/blog" legacyBehavior><a className="nav-link">Blog</a></Link>
        <Link href="/data-and-marketing" legacyBehavior><a className="nav-link">Data and Marketing</a></Link>
        <Link href="/event-calendar" legacyBehavior><a className="nav-link">Event Calendar</a></Link>
        <Link href="/broadcast" legacyBehavior><a className="nav-link">Broadcast</a></Link>
        <Link href="/services" legacyBehavior><a className="nav-link">Services</a></Link>
        <Link href="/contact" legacyBehavior><a className="nav-link">Contact</a></Link>
        <Link href="/social-network" legacyBehavior><a className="nav-link">Social Network</a></Link>
      </div>
      <style>{`
        .nav-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #a259e6;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
