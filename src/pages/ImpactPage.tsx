import React from 'react';

export default function ImpactPage() {
  return (
    <div style={styles.page}>
      {/* Section 1: Impact Overview */}
      <section style={styles.section}>
        <h1 style={styles.heading}>Our Impact</h1>
        <p style={styles.subheading}>
          See how our AI solutions are transforming businesses and creating real-world change.
        </p>
      </section>

      {/* Section 2: Case Study */}
      <section style={styles.sectionAlt}>
        <div style={styles.splitContent}>
          <img
            src="https://source.unsplash.com/500x300/?business,growth"
            alt="Case Study"
            style={styles.image}
          />
          <div style={styles.textContent}>
            <h2 style={styles.title}>Case Study: Café Boost</h2>
            <p style={styles.paragraph}>
              After implementing our AI inventory and sales forecasting tools, Café Boost increased their profit margins by 27% and reduced inventory waste by 40% within six months.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Metrics */}
      <section style={styles.section}>
        <h2 style={styles.title}>Key Metrics</h2>
        <div style={styles.metricsContainer}>
          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>+35%</h3>
            <p style={styles.metricLabel}>Operational Efficiency</p>
          </div>
          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>-50%</h3>
            <p style={styles.metricLabel}>Manual Workload</p>
          </div>
          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>+42%</h3>
            <p style={styles.metricLabel}>Decision Accuracy</p>
          </div>
        </div>
      </section>

      {/* Section 4: Client Testimonial */}
      <section style={styles.sectionAlt}>
        <div style={styles.testimonialBox}>
          <p style={styles.quote}>
            "Partnering with AI Efficiency Co. was a game-changer. Their tools not only saved us time but gave us clarity on where to grow."
          </p>
          <p style={styles.clientName}>— Sarah L., COO of TrendWorks</p>
        </div>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    height: '100vh',
  },
  section: {
    height: '100vh',
    scrollSnapAlign: 'start',
    backgroundColor: '#f4f8fb',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  sectionAlt: {
    height: '100vh',
    scrollSnapAlign: 'start',
    backgroundColor: '#e8f0fe',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 2rem',
  },
  heading: {
    fontSize: '3rem',
    color: '#192a56',
  },
  subheading: {
    fontSize: '1.3rem',
    color: '#333',
    maxWidth: '600px',
    marginTop: '1rem',
  },
  splitContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
    maxWidth: '1000px',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
  textContent: {
    maxWidth: '450px',
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#333',
  },
  metricsContainer: {
    display: 'flex',
    gap: '2rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  metricBox: {
    backgroundColor: '#fff',
    padding: '1.5rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    minWidth: '180px',
  },
  metricValue: {
    fontSize: '2rem',
    color: '#27ae60',
  },
  metricLabel: {
    fontSize: '1rem',
    color: '#34495e',
  },
  testimonialBox: {
    maxWidth: '700px',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  clientName: {
    fontWeight: 'bold',
    color: '#192a56',
  },
};
