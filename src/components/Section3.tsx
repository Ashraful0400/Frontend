export default function Section3() {
    return (
      <div style={styles.section}>
        <h2 className="overlap-check" style={styles.title}>How many users do you want to add?</h2>
  
        <div style={styles.container}>
          <div style={styles.left}>
            <div style={styles.placeholderBox}>[ User Selector or Plan Options Here ]</div>
          </div>
  
          <div style={styles.divider} />
  
          <div style={styles.right}>
            <p className="overlap-check" style={styles.heading}>Benefits</p>
            <ul style={styles.benefitsList}>
              <li className="overlap-check">Access to premium insights</li>
              <li className="overlap-check">Multi-user dashboard</li>
              <li className="overlap-check">Priority support</li>
              <li className="overlap-check">Monthly performance reports</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      height: '100vh',
      scrollSnapAlign: 'start',
      backgroundColor: '#fff',
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '1.8rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: '2rem',
      width: '80%',
      maxWidth: '1000px',
      height: '60%',
      backgroundColor: '#f9f9f9',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '2rem',
    },
    left: {
      flex: 1,
      paddingRight: '1rem',
    },
    right: {
      flex: 1,
      paddingLeft: '1rem',
    },
    divider: {
      width: '2px',
      backgroundColor: '#ccc',
      margin: '0 1rem',
    },
    heading: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    placeholderBox: {
      height: '150px',
      backgroundColor: '#e0e0e0',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#777',
      fontSize: '1rem',
    },
    benefitsList: {
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      color: '#333',
    },
  };
  