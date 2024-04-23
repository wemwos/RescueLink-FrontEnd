import React from 'react';
import Layout from '../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

function Reports() {
  return (
    <Layout>
      <div style={styles.container}>
        {/* Your monitor page content goes here */}
        <div style={styles.progressContainer}>
          <div style={styles.innerContainer}>
            <FontAwesomeIcon icon={faTools} style={styles.icon} />
            <div style={styles.textContainer}>
              <h2 style={styles.subHeading}>Page Under Development</h2>
              <p style={styles.description}>
                This page is currently under development. Check back later!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '5rem',
    marginBottom: '20px',
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  },
  innerContainer: {
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: 'transparent',
    textAlign: 'left',
  },
  icon: {
    fontSize: '3rem',
    marginRight: '20px',
    color: '#555',
  },
  textContainer: {
    textAlign: 'left',
  },
  subHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default Reports;
