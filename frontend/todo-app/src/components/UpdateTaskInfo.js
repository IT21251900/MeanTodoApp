import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateTaskInfo(props) {
  const [task, setTask] = useState({
    name: '',
    due_date: '',
    priority_level: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${id}`)
      .then((res) => {
        setTask({   
            name: res.data.name,
            due_date: res.data.due_date,
            priority_level: res.data.priority_level,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateTaskInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        name: task.name,
        due_date: task.due_date,
        priority_level: task.priority_level,
    };

    axios
      .put(`http://localhost:5000/api/tasks/${id}`, data)
      .then((res) => {
        navigate(`/show-task/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateTaskInfo!');
      });
  };

  return (
    <div className='UpdateTaskInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Task List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Task</h1>
            <p className='lead text-center'>Update Task's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
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
                  value={task.priority_level}
                  onChange={onChange}
                />
              </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTaskInfo;