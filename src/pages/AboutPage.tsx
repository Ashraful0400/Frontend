import React from 'react';

export default function AboutPage() {
  return (
    <div style={styles.page}>
      {/* Top Section: Image Left + Description Right */}
      <section style={styles.section}>
        <div style={styles.imageContainer}>
          <img
            src="https://source.unsplash.com/400x400/?office,teamwork"
            alt="About us"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>Who We Are</h2>
          <p style={styles.paragraph}>
            At AI Efficiency Co., we are dedicated to transforming the way businesses operate through cutting-edge artificial intelligence solutions. From process automation to data analysis, our mission is to make companies more agile, smart, and successful by leveraging the power of AI.
          </p>
        </div>
      </section>

      {/* Second Section: Text Left + Image Right */}
      <section style={{ ...styles.section, flexDirection: 'row-reverse', backgroundColor: '#e3eaf2' }}>
        <div style={styles.imageContainer}>
          <img
            src="https://source.unsplash.com/400x400/?team,people"
            alt="Meet the team"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>Meet the Team</h2>
          <p style={styles.paragraph}>
            We are a passionate team of AI engineers, business analysts, and product designers who believe in making technology accessible and impactful. Our collaborative spirit and focus on real-world problems drive us to deliver solutions that truly matter.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    scrollBehavior: 'smooth',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 2rem',
    minHeight: '100vh',
    gap: '2rem',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  textContainer: {
    flex: 1,
    maxWidth: '600px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#192a56',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    color: '#333',
  },
};
