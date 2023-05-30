import React from 'react';
import styles from './LogoutButton.module.scss';
import { useNavigate } from 'react-router';

const LogoutButton: React.FC<LogoutButtonProps> = ({ collapsed }) => {
  const navigate = () => {};
  return (
    <div>
        <button onClick={() => navigate('/logout')} className={styles.button}>
          Logout
        </button>
    </div>
  );
};

export default LogoutButton;