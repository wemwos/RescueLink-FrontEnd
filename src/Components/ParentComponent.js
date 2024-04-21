// ParentComponent.jsx
import React, { useState } from 'react';
import UserLogs from './UserLogs';
import UserLogsForm from './UserLogsForm';

function ParentComponent() {
  const [userLogsData, setUserLogsData] = useState([]);

  const addUserLog = (log) => {
    setUserLogsData([...userLogsData, log]);
  };

  return (
    <div>
      <UserLogsForm addUserLog={addUserLog} />
      <UserLogs userLogsData={userLogsData} />
    </div>
  );
}

export default ParentComponent;
