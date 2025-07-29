export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      textAlign: 'center',
      padding: '1.5rem 0',
      background: 'rgba(0,0,0,0.9)',
      color: '#ccc',
      marginTop: '4rem',
    }}>
      <div style={{ marginBottom: '0.5rem' }}>Empowering Artists. Connecting Fans. Building Community.</div>
      <div style={{ fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} Spacefather. All rights reserved.</div>
    </footer>
  );
}
