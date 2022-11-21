import React from "react";
import './Filter.css';

export const Filter = ({ data }) => {
  return (
    <div className="filter">
      <h3>How much time do you have?</h3>
      <ul>
        <li>15 min</li>
        <li>30 min</li>
        <li>60 min</li>
      </ul>
    </div>
  );
}