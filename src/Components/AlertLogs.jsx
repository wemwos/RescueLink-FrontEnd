import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../assets/css/alert-logs.module.css';

function AlertLogs() {
  // State to hold alert logs data
  const [alertLogsData, setAlertLogsData] = useState([]);

  // Effect to fetch alert logs data from the backend (simulated with a timeout)
  useEffect(() => {
    // Simulated API call
    const fetchAlertLogsData = () => {
      setTimeout(() => {
        // Simulated alert data from the backend
        // For now, empty array as there's no backend data
        
        setAlertLogsData(alertData);
      }, 1000); // Simulating 1 second delay for API call
    };

    fetchAlertLogsData();
  }, []);

  // Function to handle the dropdown menu action for a specific row
  const handleDropdownAction = (id) => {
    // Placeholder action for now
    console.log(`Creating report for alert with ID ${id}`);
    // You can perform your specific action here, like opening a modal or navigating to another page
  };

  return (
    <div className={styles.alertLogs}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Message</th>
            <th>Location</th>
            <th>Timestamp</th>
            <th>Responders Notified</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {alertLogsData.length > 0 ? (
            alertLogsData.map((log, index) => (
              <tr key={index}>
                <td>{log.id}</td>
                <td>{log.message}</td>
                <td>{log.location}</td>
                <td>{log.timestamp}</td>
                <td>{log.respondersNotified}</td>
                <td>
                <Dropdown className={styles.dropdown}>
                    <Dropdown.Toggle id="dropdown-basic">
                        <span className={styles.verticalPoints}>...</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                        <Dropdown.Item className={styles.dropdownItem} onClick={() => handleDropdownAction(log.id)}>Create Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Alert Logs Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AlertLogs;
