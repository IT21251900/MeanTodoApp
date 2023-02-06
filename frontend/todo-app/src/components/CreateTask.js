import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateTask = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [task, setTask] = useState({
    name: '',
    due_date: '',
    priority_level: '',
  });

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/tasks', task)
      .then((res) => {
        setTask({
            name: '',
            due_date: '',
            priority_level: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateTask!');
      });
  };

  return (
    <div className='CreateTask'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Task List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Task</h1>
            <p className='lead text-center'>Create new Task</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Task'
                  name='name'
                  className='form-control'
                  value={task.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='due_date'
                  name='due_date'
                  className='form-control'
                  value={task.due_date}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='priority_level'
                  name='priority_level'
                  className='form-control'
                  value={task.priority_levelr}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;