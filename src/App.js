import React from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import { Task } from './components/Task/Task';
import { Filter } from './components/Filter/Filter';

const tasks = [
  {
    id: 1,
    status: "done",
    description: "make some pasta",
    time: 30
  },
  {
    id: 2,
    status: "open",
    description: "boil some water",
    time: 15
  },
  {
    id: 3,
    status: "open",
    description: "boil some water",
    time: 15
  }
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className="row">
        <div className="col">
          <Filter />
          <ol className="listTasks">
            {tasks.map((task) => <li key={task.id}><Task data={task} /></li>)}
          </ol>
        </div>
        <div className="col">
          <h2>lorem ipsum</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
