import React from 'react';
import styles from './Header.module.css';
import { NavigationLink } from './../NavigationLink/NavigationLink';

const Header = ({ titles }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navHeader}>
          {
            titles.map((item) => {
              return (
                <li key={item.id}>
                  <NavigationLink title={item.title} />
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
};

export { Header };
