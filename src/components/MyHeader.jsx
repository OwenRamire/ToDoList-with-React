import React from 'react';
import logo from '../logo.svg';
import './styles/myHeaderStyles.css';

const MyHeader = () => {
  return (
    <header className="headerContainer">
      <img src={logo} className="image-logo" alt="logo" />
      <h1 className="titleHeader">React's to do list</h1>
    </header>
  );
};

export default MyHeader;
