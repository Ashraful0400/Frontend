import React, { useState } from 'react';

const features = [
  {
    title: 'AI Analytics',
    description: 'Advanced analytics to drive intelligent decisions.',
    image: 'https://via.placeholder.com/300x200?text=AI+Analytics',
    link: '/analytics',
  },
  {
    title: 'Automation Tools',
    description: 'Streamline tasks and save time with automation.',
    image: 'https://via.placeholder.com/300x200?text=Automation',
    link: '/automation',
  },
  {
    title: 'Data Dashboard',
    description: 'Interactive dashboards for real-time monitoring.',
    image: 'https://via.placeholder.com/300x200?text=Dashboard',
    link: '/dashboard',
  },
  {
    title: 'Predictive Models',
    description: 'Forecasting tools to stay ahead in business.',
    image: 'https://via.placeholder.com/300x200?text=Predictive+Model',
    link: '/forecasting',
  },
  {
    title: 'Customer Insights',
    description: 'Understand customer behavior deeply.',
    image: 'https://via.placeholder.com/300x200?text=Customer+Insights',
    link: '/insights',
  },
  {
    title: 'Efficiency Reports',
    description: 'Track and boost operational efficiency.',
    image: 'https://via.placeholder.com/300x200?text=Efficiency',
    link: '/efficiency',
  },
];

export default function Section2() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Features</h2>
      <div style={styles.grid}>
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            style={styles.card}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={feature.image}
              alt={feature.title}
              style={{
                ...styles.image,
                opacity: hoverIndex === index ? 0.3 : 1,
              }}
            />
            <div
              style={{
                ...styles.overlay,
                opacity: hoverIndex === index ? 1 : 0,
              }}
            >
              <h3 style={styles.title}>{feature.title}</h3>
              <p style={styles.description}>{feature.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#192a56',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    justifyItems: 'center',
  },
  card: {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease-in-out',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(25, 42, 86, 0.8)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    transition: 'opacity 0.3s ease-in-out',
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '0.95rem',
  },
};
