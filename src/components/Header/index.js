import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
}