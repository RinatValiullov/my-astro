import React from 'react';
import classes from './Header.module.css';

const Header = ({ titles }) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {
            titles.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.title.toLowerCase()}>{item.title}</a>
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
