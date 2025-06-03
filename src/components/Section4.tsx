import React from 'react';

export default function Section4() {
  return (
    <div style={styles.section}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>🌟</div>
        <nav style={styles.nav}>
          <button style={styles.button} onClick={() => alert('Explore clicked!')}>Explore</button>
          <button style={styles.button} onClick={() => alert('Demo clicked!')}>Demo</button>
        </nav>
      </aside>

      <main style={styles.content}>
        <h2 style={styles.title}>Pricing Plans</h2>
        <div style={styles.pricingContainer}>
          {[
            {
              name: 'Basic',
              price: '$9/mo',
              features: ['1 user', 'Email support'],
            },
            {
              name: 'Standard',
              price: '$29/mo',
              features: ['5 users', 'Chat support'],
            },
            {
              name: 'Premium',
              price: '$59/mo',
              features: ['Unlimited users', 'Priority support'],
            },
          ].map(({ name, price, features }) => (
            <div key={name} style={styles.card} className="pricing-card">
              <h3 style={styles.cardTitle}>{name}</h3>
              <p style={styles.cardPrice}>{price}</p>
              <ul style={styles.featureList}>
                {features.map((f, i) => (
                  <li key={i} style={styles.featureItem}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    height: '100vh',
    scrollSnapAlign: 'start',
    display: 'flex',
    backgroundColor: '#f9faff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#192a56',
  },
  sidebar: {
    width: '140px',
    backgroundColor: '#0b2240', // navy blue
    color: '#fff',
    padding: '3rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    boxShadow: '2px 0 8px rgba(11, 34, 64, 0.7)',
  },
  logo: {
    fontSize: '3.5rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.8rem',
    width: '100%',
  },
  button: {
    cursor: 'pointer',
    fontSize: '1.3rem',
    fontWeight: 600,
    userSelect: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#3a5ca8', // lighter navy for button
    color: '#fff',
    transition: 'background-color 0.3s ease',
    width: '100%',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: '#2a4380', // darker on hover - see note below
  },
  content: {
    flex: 1,
    padding: '4rem 5rem',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 700,
    marginBottom: '3rem',
  },
  pricingContainer: {
    display: 'flex',
    gap: '2.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 1 280px',
    backgroundColor: '#fff',
    padding: '2.5rem 2rem',
    borderRadius: '20px',
    boxShadow: '0 12px 30px rgba(25, 42, 86, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: '0.8rem',
    color: '#192a56',
  },
  cardPrice: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: '#4a90e2',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    textAlign: 'center',
    color: '#555',
  },
  featureItem: {
    padding: '0.5rem 0',
    fontSize: '1rem',
    borderBottom: '1px solid #eee',
  },
};
