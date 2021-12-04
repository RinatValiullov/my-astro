import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://github.com/rinatvaliullov" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://gitlab.com/4rontender" target="_blank">Gitlab</a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
