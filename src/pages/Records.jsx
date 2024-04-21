// Records.js

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import styles from '../assets/css/records.module.css';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import UserLogs from '../Components/UserLogs'; 
import ResponseLogs from '../Components/ResponseLogs';

function Records() {
  const [activeTab, setActiveTab] = useState('userLogs');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div>
        <div className={styles.container}>
          <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="userLogs" className={`${styles.tabNavItem} ${activeTab === 'userLogs' ? styles.tabNavActive : ''}`}>User Logs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="alertLogs" className={`${styles.tabNavItem} ${activeTab === 'alertLogs' ? styles.tabNavActive : ''}`}>Alert Notification Logs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="responseLogs" className={`${styles.tabNavItem} ${activeTab === 'responseLogs' ? styles.tabNavActive : ''}`}>Response Activity Logs</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="userLogs" className={styles.tabPane}>
                <UserLogs />
              </Tab.Pane>
              <Tab.Pane eventKey="alertLogs" className={styles.tabPane}>
                {/* Render content for Alert Notification Logs */}
                <div>Alert Logs </div>
              </Tab.Pane>
              <Tab.Pane eventKey="responseLogs" className={styles.tabPane}>
                <ResponseLogs />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </Layout>
  );
}

export default Records;
