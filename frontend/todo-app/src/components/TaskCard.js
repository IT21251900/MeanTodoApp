import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TaskCard = (props) => {
  const task = props.task;

  return (
    <div className='card-container'>
      <div className='desc'>
        <h2>
          <Link to={`/show-task/${task._id}`}>{task.name}</Link>
        </h2>
        <h3>{task.due_date}</h3>
        <p>{task.priority_level}</p>
      </div>
    </div>
  );
};

export default TaskCard;