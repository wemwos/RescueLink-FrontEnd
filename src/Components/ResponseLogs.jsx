import React from 'react';
import styles from '../assets/css/response-logs.module.css';

function ResponseLogs() {
  // Dummy response activity log data
  const responseLogsData = [
    { id: 1, timestamp: '2024-04-21 09:30 AM', actionsTaken: 'Action 1', status: 'Resolved', collaborators: 'PNP, BFP', resourcesUtilized: 'Resource 1', outcome: 'Outcome 1' },
    { id: 2, timestamp: '2024-04-21 10:00 AM', actionsTaken: 'Action 2', status: 'Under Investigation', collaborators: 'ERU', resourcesUtilized: 'Resource 2', outcome: 'Outcome 2' },
    { id: 3, timestamp: '2024-04-21 11:00 AM', actionsTaken: 'Action 3', status: 'Resolved', collaborators: 'PNP', resourcesUtilized: 'Resource 3', outcome: 'Outcome 3' },
    { id: 4, timestamp: '2024-04-21 12:00 PM', actionsTaken: 'Action 4', status: 'Under Investigation', collaborators: 'BFP', resourcesUtilized: 'Resource 4', outcome: 'Outcome 4' },
    { id: 5, timestamp: '2024-04-21 01:00 PM', actionsTaken: 'Action 5', status: 'Resolved', collaborators: 'PNP, ERU', resourcesUtilized: 'Resource 5', outcome: 'Outcome 5' },
    // Add more dummy data as needed
  ];

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
          {responseLogsData.map((log, index) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResponseLogs;
