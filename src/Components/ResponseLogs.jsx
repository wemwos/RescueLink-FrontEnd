import React, { useState, useEffect } from 'react';
import styles from '../assets/css/response-logs.module.css';

function ResponseLogs() {
  // State to hold response logs data
  const [responseLogsData, setResponseLogsData] = useState([]);

  // Effect to fetch response logs data from the backend (simulated with a timeout)
  useEffect(() => {
    // Simulated API call
    const fetchResponseLogsData = () => {
      setTimeout(() => {
        // Simulated response data from the backend
        // For now, empty array as there's no backend data
        const responseData = [];
        setResponseLogsData(responseData);
      }, 1000); // Simulating 1 second delay for API call
    };

    fetchResponseLogsData();
  }, []);

  return (
    <div className={styles.responseLogs}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>ID #</th>
            <th>Timestamp</th>
            <th>Actions Taken</th>
            <th>Status</th>
            <th>Collaborators</th>
            <th>Resources Utilized</th>
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          {responseLogsData.length > 0 ? (
            responseLogsData.map((log, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{log.id}</td>
                <td>{log.timestamp}</td>
                <td>{log.actionsTaken}</td>
                <td>{log.status}</td>
                <td>{log.collaborators}</td>
                <td>{log.resourcesUtilized}</td>
                <td>{log.outcome}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No Response Logs Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ResponseLogs;
