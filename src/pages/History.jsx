import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import styles from '../assets/css/history.module.css';

function History() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [sortedClips, setSortedClips] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(false); // Close dropdown after selection
    // Sort clips based on the selected filter
    sortClips(filter);
  };

  const sortClips = (filter) => {
    let sortedClips = [...videoClips];
    switch (filter) {
      case 'Location':
        sortedClips.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case 'Date':
        sortedClips.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date in descending order
        break;
      case 'Time':
        sortedClips.sort((a, b) => {
          const timeA = new Date(`1970-01-01T${a.time}`);
          const timeB = new Date(`1970-01-01T${b.time}`);
          return timeA - timeB;
        });
        break;
      default:
        sortedClips = [...videoClips];
    }
    setSortedClips(sortedClips);
  };

  // Dummy data for video clips
  const videoClips = [
    {
      id: 1,
      location: "",
      date: "",
      time: ""
    },
    {
      id: 2,
      location: "",
      date: "",
      time: ""
    },
    {
      id: 3,
      location: "",
      date: "",
      time: ""
    },
    {
      id: 4,
      location: "",
      date: "",
      time: ""
    },
    {
      id: 5,
      location: "",
      date: "",
      time: ""
    },
    {
      id: 6,
      location: "",
      date: "",
      time: ""
    },
    // Add more dummy data as needed
  ];

  const clipsToRender = sortedClips || videoClips; // Use sortedClips if available, otherwise use videoClips

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <button className={styles.filterButton} onClick={toggleDropdown}>
            Filter by {selectedFilter ? `(${selectedFilter})` : ''}
            {showDropdown ? <span className={styles.chevronUp}></span> : <span className={styles.chevronDown}></span>}
          </button>
          {showDropdown && (
            <div className={styles.dropdownContent}>
              <button className={styles.dropdownItem} onClick={() => handleFilterSelection('Location')}>Location</button>
              <button className={styles.dropdownItem} onClick={() => handleFilterSelection('Date')}>Date</button>
              <button className={styles.dropdownItem} onClick={() => handleFilterSelection('Time')}>Time</button>
            </div>
          )}
        </div>
        {/* Render video clips */}
        <div className={styles.clipsContainer}>
          {clipsToRender.map(clip => (
            <div key={clip.id} className={styles.clip}>
              <video controls className={styles.video}>
                {/* Add video source here */}
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Details for each clip */}
              <div className={styles.details}>
                <h5>Location:{clip.location}</h5>
                <p><strong>Date:</strong> {clip.date}</p>
                <p><strong>Time:</strong> {clip.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default History;
