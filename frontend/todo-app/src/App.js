import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateTask from './components/CreateTask';
import ShowTaskList from './components/ShowTaskList';
import ShowTaskDetails from './components/ShowTaskDetails';
import UpdateTaskInfo from './components/UpdateTaskInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowTaskList />} />
          <Route path='/create-task' element={<CreateTask />} />
          <Route path='/edit-task/:id' element={<UpdateTaskInfo />} />
          <Route path='/show-task/:id' element={<ShowTaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;