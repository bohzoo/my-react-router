import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

// Presentaional Component
import FrontPage from './sub-components/front-page';
import Home from './sub-components/Home';
import About from './sub-components/About';
import Service from './sub-components/Service';
import page404 from './sub-components/page404';

export default function TodoApp({task, tasks, inputTask, addTask}) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
          </ul>
        </nav>
      </header>
      <div className="page">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/service' component={Service} />
          <Route component={page404} />
        </Switch>
      </div>
      <FrontPage task={task} tasks={tasks} inputTask={inputTask} addTask={addTask} />
    </div>
  );
}
