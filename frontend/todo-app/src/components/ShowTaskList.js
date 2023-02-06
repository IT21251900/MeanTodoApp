import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskCard from './TaskCard';

function ShowTaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tasks')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowTaskList');
      });
  }, []);

  const taskList =
    tasks.length === 0
      ? 'there is no task record!'
      : tasks.map((task, k) => <TaskCard task={task} key={k} />);

  return (
    <div className='ShowTaskList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Tasks List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-task'
              className='btn btn-outline-warning float-right'
            >
              + Add New Task
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{taskList}</div>
      </div>
    </div>
  );
}

export default ShowTaskList;