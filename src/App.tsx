import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import PhotosnapApp from './challenges/photosnap/PhotosnapApp';
import PomodoroApp from './challenges/pomodoro/PomodoroApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pomodoro">
            <PomodoroApp />
          </Route>
          <Route path="/photosnap">
            <PhotosnapApp />
          </Route>
          <Route path="/">
            <nav>
              <ul>
                <li>
                  <Link to="/pomodoro">Pomodoro counter</Link>
                </li>
                <li>
                  <Link to="/photosnap">Photosnap</Link>
                </li>
              </ul>
            </nav>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
