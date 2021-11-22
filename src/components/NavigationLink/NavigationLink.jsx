import React from 'react';

const NavigationLink = ({ title }) => {
  return (
    <a href={title.toLowerCase()}>{title}</a>
  );
};

export { NavigationLink };
