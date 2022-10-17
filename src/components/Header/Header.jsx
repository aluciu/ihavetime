import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon="fa-solid fa-clock" className="icon" />
        I Have Time
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon="fa-solid fa-square" />
          <FontAwesomeIcon icon="fa-solid fa-check" transform="shrink-8" inverse />
        </span>
      </div>
      <nav className="menu">
        <ul>
          <li>Done Tasks</li>
          <li>Add Task</li>
          <li>Log In</li>
        </ul>
      </nav>
    </header>
  );
}