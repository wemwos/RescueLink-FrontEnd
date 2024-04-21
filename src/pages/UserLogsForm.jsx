// UserLogsForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../assets/css/userlogs-form.module.css';

function UserLogsForm({ addUserLog }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startShiftTime, setStartShiftTime] = useState('');
  const [endShiftTime, setEndShiftTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const log = { name, email, date: selectedDate, startShiftTime, endShiftTime };
    addUserLog(log);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setSelectedDate(new Date());
    setStartShiftTime('');
    setEndShiftTime('');

    // Show success toast
    toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000 // Close the toast after 3 seconds
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>User Logs Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
            </div>
            <div className={styles.formControl}>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            </div>
            <div className={styles.formControl}>
              <label>Date</label>
              <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            </div>
            <div className={styles.formControl}>
              <label>Start Shift Time</label>
              <input type="time" value={startShiftTime} onChange={(e) => setStartShiftTime(e.target.value)} required />
            </div>
            <div className={styles.formControl}>
              <label>End Shift Time</label>
              <input type="time" value={endShiftTime} onChange={(e) => setEndShiftTime(e.target.value)} required />
            </div>
            <Link to="/monitor" className={styles.submitButton}>
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogsForm;
