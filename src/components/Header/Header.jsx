import React from 'react';
import classes from './Header.module.css';
import { NavigationLink } from './../NavigationLink/NavigationLink';

const Header = ({ titles }) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {
            titles.map((item) => {
              return (
                <li key={item.id}>
                  <NavigationLink title={item.title} />
                  {/* <a href={item.title.toLowerCase()}>{item.title}</a> */}
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
