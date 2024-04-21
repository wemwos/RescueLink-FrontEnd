import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faHistory,  faFolder, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/css/sidenav.module.css';
import DeptIcon from '../assets/img/PNP.png';

function SideNav() {
  return (
    <div className={styles.sidenav}>
      <div className={styles.sidenavEmblem}>
        <div className={styles.emblemCircle}>
          <img src={DeptIcon} alt="User" className={styles.DeptIcon} />
          <h4 className={styles.DeptName}>Philippine National Police</h4>
        </div>
      </div>

      <div className={styles.navbtns}>
        <CustomNavLink to="/monitor" icon={faDesktop}>Monitor</CustomNavLink>
        <CustomNavLink to="/history" icon={faHistory}>History</CustomNavLink>
        <CustomNavLink to="/records" icon={faFolder}>Records</CustomNavLink>
        <CustomNavLink to="/reports" icon={faChartSimple}>Reports</CustomNavLink>
      </div>
    </div>
  );
}

function CustomNavLink({ to, icon, children }) {
  const isActive = window.location.pathname === to;
  const buttonStyle = {
    backgroundColor: isActive ? '#6aa8fa' : '#f0f0f0',
  };

  return (
    <NavLink to={to} className={styles.navButton} style={buttonStyle} activeclassname={styles.activeNavButton}>
      <FontAwesomeIcon icon={icon} className={styles.navButtonIcon} />
      {children}
    </NavLink>
  );
}


export default SideNav;
