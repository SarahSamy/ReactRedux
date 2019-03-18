import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Switch } from 'react-router';
import AddTask from './components/AddTask';
import TasksList from './components/List';
import DeleteTask from './components/Deleted';
import CompleteTask from './components/Completed';
import './App.css';


const App= ()=>(
  <>
  <div className="mytodoapp">
  <AddTask />
  <div className="alltasks">

  <TasksList/>
  </div>

  <div className="completed">
  <>
  <h3>>>Completed Tasks</h3>
  <CompleteTask/>
  </>
</div>
<div className="deleted">
<>
<h3>>>Deleted Tasks</h3>
  <DeleteTask/>
  </>
</div>
</div>
  </>
)


export default App;
