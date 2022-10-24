import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import './Task.css';

export const Task = ({ data }) => {
  const cxTask = classnames({
    task: true,
    done: data.status === "done"
  });
  return (
    <div className={cxTask}>
      <div className="status">
        {data.status === "done" ?
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon="fa-solid fa-square" />
            <FontAwesomeIcon icon="fa-solid fa-check" transform="shrink-8" inverse />
          </span>
          :
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon="fa-solid fa-square" />
          </span>
        }
      </div>
      <div className="description">
        {data.description}
      </div>
      <div className="name">
        {data.time} min
      </div>
    </div>
  );
}