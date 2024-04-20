import React from 'react';
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

        <div className={styles.sidenavBtns}>
            <h3>SIDENAV</h3>
        </div>
    </div>
  );
}

export default SideNav;
