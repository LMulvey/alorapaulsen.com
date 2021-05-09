import React from 'react';
import {
  bodyStyle,
  footerContainer,
  titleContainer,
} from './styles/main.css.js';

export const Home = () => {
  return (
    <div className={bodyStyle}>
      <div className={titleContainer}>
        <h1>Alora Paulsen</h1>
      </div>

      <div className={footerContainer}>
        Copyright &copy; {new Date().getFullYear()} Alora Paulsen - All rights
        reserved.
      </div>
    </div>
  );
};
