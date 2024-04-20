import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faHistory, faFolder, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
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
        <Link to="/monitor" className={styles.navButton}>
          <FontAwesomeIcon icon={faDesktop} className={styles.navButtonIcon} />
          Monitor
        </Link>
        <Link to="/history" className={styles.navButton}>
          <FontAwesomeIcon icon={faHistory} className={styles.navButtonIcon} />
          History
        </Link>
        <Link to="/records" className={styles.navButton}>
          <FontAwesomeIcon icon={faFolder} className={styles.navButtonIcon} />
          Records
        </Link>
        <Link to="/reports" className={styles.navButton}>
          <FontAwesomeIcon icon={faChartBar} className={styles.navButtonIcon} />
          Reports
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
