import React from 'react';

export default function ContactUsPage() {
  return (
    <div style={styles.container}>
      {/* Left Info Column */}
      <div style={styles.infoColumn}>
        <h2>Talk with our team</h2>
        <p>
          Fill out your information and one of our representatives will reach out to you.
          For quick help, check out:
        </p>
        <ul>
          <li>
            Billing management: <a href="#">Access your billing page</a>
          </li>
          <li>
            Subscription: <a href="#">Upgrade or change your plan</a>
          </li>
          <li>
            Account: <a href="#">Manage your account</a>
          </li>
        </ul>
      </div>

      {/* Right Form Column */}
      <div style={styles.formColumn}>
        <form style={styles.form}>
          <label>First Name *</label>
          <input type="text" placeholder="e.g., John" required />

          <label>Last Name *</label>
          <input type="text" placeholder="Smith" required />

          <label>Company Email *</label>
          <input type="email" placeholder="name@company.com" required />

          <label>Phone Number *</label>
          <input type="tel" placeholder="+1 555 555 5555" required />

          <label>Company Size *</label>
          <select required>
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201+">201+</option>
          </select>

          <label>Country *</label>
          <select required>
            <option value="">Select...</option>
            <option value="ca">Canada</option>
            <option value="us">United States</option>
            <option value="other">Other</option>
          </select>

          <label>What would you like to discuss? *</label>
          <select required>
            <option value="">Select...</option>
            <option>AI Automation</option>
            <option>Business Consulting</option>
            <option>Custom Integration</option>
          </select>

          <label>How can our team help you?</label>
          <textarea placeholder="Tell us about your team or project..." rows={4} />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '4rem 2rem',
    backgroundColor: '#f5f6f7',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  infoColumn: {
    flex: 1,
    minWidth: '300px',
    color: '#333',
    lineHeight: 1.6,
  },
  formColumn: {
    flex: 1,
    minWidth: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#192a56',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
