import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/login.module.css'; 
import Logo from '../assets/img/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import UserLogsForm from '../pages/UserLogsForm'; 

function Login() {
  const [idNumber, setIdNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('ID Number:', idNumber);
    console.log('Department:', department);
    console.log('Password:', password);
    // Example: You can send the login request to the server here
    // Open the modal after successful login
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.LogoContainer}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.LoginContainer}>
        <h2 className={styles.LoginH}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <label>ID Number</label> <br/>
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              className={styles.inputField}
              placeholder='Enter ID Number'
            />
          </div>
          <div className={styles.formControl}>
            <label>Department</label> <br/>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className={styles.inputField}
            >
              <option value="">Select Department</option>
              <option value="Philippine National Police">Philippine National Police</option>
              <option value="Bureau of Fire Protection">Bureau of Fire Protection</option>
              <option value="Emergency Response Unit">Emergency Response Unit</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label>Password</label>
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className={`${styles.inputField} ${styles.passwordInput}`}
              />
              <span className={styles.passwordToggle} onClick={handlePasswordToggle}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <Link to="/forgot-password">Forgot Password?</Link> {/* Link to the forgot password page */}
          </div>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
      {isModalOpen && (
        <UserLogsForm isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}

export default Login;
