import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.navFooter}>
        <li>
          <a href="https://github.com/rinatvaliullov" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://gitlab.com/4rontender" target="_blank">Gitlab</a>
        </li>
      </ul>
      <small className={styles.byline}>
        <a href="https://astro.build" target="_blank">
          <span className={styles.rocket}>🚀</span>
          <span className={styles.text}>Built by Astro</span>
        </a>
      </small>
    </footer>
  );
};

export { Footer };
