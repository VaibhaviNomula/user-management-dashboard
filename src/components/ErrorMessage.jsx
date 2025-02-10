import React from 'react';
import styles from '../styles/ErrorMessage.module.css';

const ErrorMessage = ({ error, onClose }) => {
  if (!error) return null;

  return (
    <div className={styles.errorMessage}>
      <p>{error}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ErrorMessage;
