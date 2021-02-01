import React from 'react';
import './Pomodoro.scss';
import ProgressRing from './progressring/ProgressRing';

function Pomodoro() {
  return (
    <div className="pomodoro-app">
      <h1>pomodoro</h1>

      <div className="timer-selector">
        <button className="timer-trigger selected">pomodoro</button>
        <button className="timer-trigger">short break</button>
        <button className="timer-trigger">long break</button>
      </div>

      <div className="timer-display">
        <div className="inner-container">
          <ProgressRing radius={ 169.5 } stroke={ 8 } progress={ 80 } />
          <span className="timer-time">25:00</span>
          <span className="timer-status">start</span>
        </div>
      </div>


      {/* pause
        restart */}

      {/* Settings

        Time (minutes)
        pomodoro
        short break
        long break

        Font
        Color

        Apply */}
    </div>
  );
}

export default Pomodoro;
