import React from 'react';

export default function Section1() {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Empowering Businesses with AI</h1>
        <p style={styles.description}>
          We specialize in harnessing the power of artificial intelligence to help businesses become more efficient,
          data-driven, and future-ready. Our innovative tools and platforms are designed to simplify decision-making,
          optimize operations, and unlock new growth opportunities.
        </p>
      </div>
      <button style={styles.button} onClick={() => alert("Navigating to Discover Page")}>
        Discover More
      </button>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    height: '100vh',
    background: 'linear-gradient(to bottom right, #f5f7fa, #c3cfe2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',
    position: 'relative',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
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
    transition: 'background-color 0.3s',
  },
};
