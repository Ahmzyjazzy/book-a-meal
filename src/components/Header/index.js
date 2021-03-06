import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <header className="app--header">
      <nav>
      <Link to='/'><h1>Book A Meal</h1></Link>
        <ul>
          <li><Link to='/cart'><i className="ion-md-cart"></i></Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
}