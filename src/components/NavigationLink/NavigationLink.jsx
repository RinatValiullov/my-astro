import React from 'react';
import styles from './NavigationLink.module.css';

const NavigationLink = ({ title }) => {
  return (
    <a href={title.toLowerCase()} className={styles.link}>{title}</a>
  );
};

export { NavigationLink };
