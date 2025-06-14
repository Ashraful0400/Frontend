import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      <nav style={styles.navbar}>
        <div style={styles.container}>
          <div style={styles.logo}>🌟 LOGO</div>
          <div style={styles.navLinks}>
            <Link to="/about" style={styles.link}>About Us</Link>
            <Link to="/services" style={styles.link}>Our Services</Link>
            <Link to="/impact" style={styles.link}>Impact</Link>
            <Link to="/contact" style={styles.link}>Contact Us</Link>
          </div>
        </div>
      </nav>
    );
  }
const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '1000px',
    backgroundColor: '#fff',
    borderRadius: '40px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '0.5rem 1rem',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#192a56',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#192a56',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'color 0.3s',
  },
};
