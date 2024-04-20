import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/404.module.css';

function NotFound() {
  return (
    <div className={`${styles.container} container d-flex justify-content-center align-items-center flex-column`} style={{ height: '100vh' }}>
      <h1 className={`${styles.headerText} mb-4`}>ERROR 404</h1>
      <h4 className={`${styles.headerText2} mb-4`}>PAGE NOT FOUND</h4>
      <Link to="/" className="text-decoration-none">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
