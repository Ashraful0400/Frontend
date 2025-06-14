import React from 'react';

export default function OurServicesPage() {
  return (
    <div style={styles.page}>
      {/* Section 1: Core Values Overview */}
      <section style={styles.section} id="section1">
        <h2 style={styles.heading}>Our Core Values</h2>
        <div style={styles.valuesSection}>
          <div style={styles.card}>
            <img
              src="https://source.unsplash.com/300x300/?innovation,technology"
              alt="Innovation"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Innovation</h3>
          </div>
          <div style={styles.card}>
            <img
              src="https://source.unsplash.com/300x300/?collaboration,team"
              alt="Collaboration"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Collaboration</h3>
          </div>
          <div style={styles.card}>
            <img
              src="https://source.unsplash.com/300x300/?efficiency,automation"
              alt="Efficiency"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Efficiency</h3>
          </div>
        </div>
      </section>

      {/* Section 2: Innovation */}
      <section style={styles.detailSection} id="section2">
        <div style={styles.descriptionItem}>
          <img
            src="https://source.unsplash.com/400x250/?ai,brain"
            alt="AI Focus"
            style={styles.descImage}
          />
          <p style={styles.paragraph}>
            We lead with <strong>innovation</strong>, developing AI-powered tools that anticipate business needs and generate intelligent solutions tailored to your industry.
          </p>
        </div>
      </section>

      {/* Section 3: Collaboration */}
      <section style={styles.detailSection} id="section3">
        <div style={styles.descriptionItem}>
          <img
            src="https://source.unsplash.com/400x250/?teamwork,office"
            alt="Collaboration"
            style={styles.descImage}
          />
          <p style={styles.paragraph}>
            Our approach is built on <strong>collaboration</strong>—we work side by side with businesses to ensure alignment and create real value.
          </p>
        </div>
      </section>

      {/* Section 4: Efficiency */}
      <section style={styles.detailSection} id="section4">
        <div style={styles.descriptionItem}>
          <img
            src="https://source.unsplash.com/400x250/?workflow,robot"
            alt="Efficiency"
            style={styles.descImage}
          />
          <p style={styles.paragraph}>
            <strong>Efficiency</strong> drives us. Our AI solutions automate repetitive tasks, optimize operations, and save your business time and money.
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
    padding: '4rem 2rem',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#192a56',
    marginBottom: '2rem',
  },
  valuesSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    textAlign: 'center',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    color: '#34495e',
  },
  detailSection: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '4rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    maxWidth: '1000px',
  },
  descImage: {
    width: '400px',
    maxWidth: '100%',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
  paragraph: {
    flex: 1,
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: 1.6,
  },
};