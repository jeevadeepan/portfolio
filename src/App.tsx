import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Pomodoro from './challenges/pomodoro/Pomodoro';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pomodoro">
            <Pomodoro />
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
