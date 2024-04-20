import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../assets/css/header.module.css'; 
import Logo from '../assets/img/logo-noname.png';
import UserIcon from '../assets/img/PNP.png'; 

function Header() {
  return (
    <div 
      className={`${styles.navbar} d-flex justify-content-between`}
      style={{ 
        background: 'linear-gradient(to right, #E9F6FD, #45AADB)',
        padding: '15px 20px', // Add padding to mimic Navbar padding
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={Logo} 
          className={styles.logo} 
          alt="Logo"
        />
        <span className={styles.logoText}>RescueLink</span>
      </div>
      <div className={`d-flex align-items-center ${styles.profileDropdown}`}>
        {/* Profile dropdown */}
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #47B8F8',
            }}
          >
            <>
              <img src={UserIcon} className={styles.UserIcon} alt="Profile" /> 
              <span className={styles.userText}>PNP</span> 
            </>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="account-settings" className={styles.dropdownItem}>Account Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/" className={styles.dropdownItem}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
