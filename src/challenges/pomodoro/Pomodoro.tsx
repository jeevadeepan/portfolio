import React, { useEffect, useState } from 'react';
import './Pomodoro.scss';
import SettingsIcon from './assets/img/icon-settings.svg';
import Settings from './settings/Settings';
import Timer from './timer/Timer';
import Tabs from './tabs/Tabs';
import { useSelector } from 'react-redux';
import { selectSettings } from './settings/settingsSlice';

function Pomodoro() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsHandler = () => {
    setSettingsOpen(true);
  };
  const settings = useSelector(selectSettings);

  const tabConfig = [
    {
      name: 'pomodoro',
      content: <Timer time='pmTime' key='tab-0' />
    }, {
      name: 'short break',
      content: <Timer time='sbTime' key='tab-1' />
    }, {
      name: 'long break',
      content: <Timer time='lbTime' key='tab-2' />
    }
  ];

  useEffect(() => {
    const listener = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setSettingsOpen(false);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
  return (
    <div className={"pomodoro-app " + settings.font + ' ' + settings.color}>
      <h1>pomodoro</h1>
      <Tabs tabConfig={tabConfig} />
      <button className="settings-btn" onClick={settingsHandler}><img src={SettingsIcon} alt="Settings" /></button>
      {settingsOpen && <Settings closeHandler={setSettingsOpen} />}
    </div>
  );
}

export default Pomodoro;
