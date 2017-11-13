import React from 'react';
import { NavLink } from 'react-router-dom';
import './menubar.css';

const Menubar = () => (
  <nav className="menubar">
    <ul>
      <li><NavLink activeClassName="active" exact={true} to="/">Dashboard</NavLink></li>
      <li><NavLink activeClassName="active" to="/todo">Todos</NavLink></li>
      <li><NavLink activeClassName="active" to="/counter">Counter</NavLink></li>
      <li><NavLink activeClassName="active" to="/image">Image fetcher</NavLink></li>
      <li><NavLink activeClassName="active" to="/hocs">HOC image getter</NavLink></li>
    </ul>
  </nav>
);

export default Menubar;