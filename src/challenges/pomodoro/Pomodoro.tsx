import React, {useEffect, useState} from 'react';
import './Pomodoro.scss';
import ProgressRing from './progressring/ProgressRing';
import SettingsIcon from './assets/img/icon-settings.svg';
import Settings from './settings/Settings';
import Timer from './timer/Timer';
import Tabs from './tabs/Tabs';

function Pomodoro() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsHandler = () => {
    setSettingsOpen(true);
  };

  const tabConfig = [
    {
      name: 'pomodoro',
      content: <Timer time={25} key='tab-0' />
    },{
      name: 'short break',
      content: <Timer time={5} key='tab-1' />
    },{
      name: 'long break',
      content: <Timer time={10} key='tab-2' />
    }
  ];

  useEffect(() => {
    const listener =  (evt: KeyboardEvent) => {
      if(evt.key === 'Escape') {
        setSettingsOpen(false);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
  return (
    <div className="pomodoro-app">
      <h1>pomodoro</h1>

      {/* <div className="timer-selector">
        <button className="timer-trigger selected">pomodoro</button>
        <button className="timer-trigger">short break</button>
        <button className="timer-trigger">long break</button>
      </div> */}

      {/* <div className="timer-display">
        <div className="inner-container">
          <ProgressRing radius={ 169.5 } stroke={ 8 } progress={ 90 } />
          <span className="timer-time">25:00</span>
          <button className="timer-trigger-btn">start</button>
        </div>
      </div> */}
      {/* <Timer time={25}/> */}
      <Tabs tabConfig={tabConfig}/>
      <button className="settings-btn" onClick={settingsHandler}><img src={SettingsIcon} alt="Settings"/></button>
      {settingsOpen && <Settings closeHandler={setSettingsOpen}/>}
    </div>
  );
}

export default Pomodoro;
