import React from 'react';
import classes from './Header.module.css';

const Header = ({ titles }) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {
            titles.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })
          }
        </ul>
      </nav>
    </header>
  );
};

export { Header };
