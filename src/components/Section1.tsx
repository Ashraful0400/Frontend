import React from 'react';

export default function Section1() {
  return (
    <section style={styles.section}>
      <div style={styles.innerContainer}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Empowering Businesses with AI</h1>
          <p style={styles.description}>
            We specialize in harnessing the power of artificial intelligence to help businesses become more efficient,
            data-driven, and future-ready. Our innovative tools and platforms are designed to simplify decision-making,
            optimize operations, and unlock new growth opportunities.
          </p>
        </div>
      </div>

      <button
        style={styles.button}
        onClick={() => alert('Navigating to Discover Page')}
      >
        Discover More
      </button>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    height: '100vh',
    scrollSnapAlign: 'start',
    background: 'linear-gradient(to bottom right, #f5f7fa, #c3cfe2)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  innerContainer: {
    maxWidth: '800px',
    textAlign: 'center',
  },
  content: {
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#192a56',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    color: '#333',
  },
  button: {
    position: 'absolute',
    bottom: '40px',
    left: '40px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#192a56',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease',
  },
};
