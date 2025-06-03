import React from 'react';

interface ScrollIndicatorProps {
  activeIndex: number;
  totalSections: number;
}

export default function ScrollIndicator({ activeIndex, totalSections }: ScrollIndicatorProps) {
  return (
    <div style={styles.container}>
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          style={{
            ...styles.dot,
            backgroundColor: activeIndex === index ? '#192a56' : '#dcdde1',
          }}
        />
      ))}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    right: '20px',           // ← moved to the right side
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    zIndex: 999,
  },
  dot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    transition: 'background-color 0.3s',
  },
};
