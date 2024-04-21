// UserLogs.jsx
import React from 'react';
import styles from '../assets/css/user-logs.module.css';

function UserLogs({ userLogsData }) {
  return (
    <div className={styles.userLogs}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Start Shift Time</th>
            <th>End Shift Time</th>
          </tr>
        </thead>
        <tbody>
          {userLogsData ? (
            userLogsData.map((log, index) => (
              <tr key={index}>
                <td>{log.name}</td>
                <td>{log.email}</td>
                <td>{log.date.toString()}</td>
                <td>{log.startShiftTime}</td>
                <td>{log.endShiftTime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No user logs available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserLogs;
