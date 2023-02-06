import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowTaskDetails(props) {
  const [task, setTask] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${id}`)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowTaskDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowTaskDetails_deleteClick');
      });
  };

  const TaskItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{task.name}</td>
          </tr>
          
          <tr>
            <th scope='row'>5</th>
            <td>Due Date</td>
            <td>{task.due_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Priority level</td>
            <td>{task.priority_level}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowTaskDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Task List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Task's Record</h1>
            <p className='lead text-center'>View Task's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{TaskItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(task._id);
              }}
            >
              Delete Task
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-task/${task._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTaskDetails;