import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import PomodoroApp from './challenges/pomodoro/PomodoroApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pomodoro">
            <PomodoroApp />
          </Route>
          <Route path="/">
            <nav>
              <ul>
                <li>
                  <Link to="/pomodoro">Pomodoro counter</Link>
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
