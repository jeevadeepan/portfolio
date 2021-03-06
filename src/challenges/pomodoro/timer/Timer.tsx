import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useInterval } from '../../../hooks';
import ProgressRing from '../progressring/ProgressRing';
import { selectSettings } from '../settings/settingsSlice';
import './Timer.scss';

enum TimerState {
  ready, running, stopped, complete
}

type TimerProps = {
  time: string
};

function Timer(props: TimerProps) {
  const settings = useSelector(selectSettings);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currState, setCurrState] = useState(TimerState.ready);
  const [startTime, setStartTime] = useState<number|any>();
  const [minRem, setMinRem] = useState(settings[props.time]);
  const [secRem, setSecRem] = useState(0);
  const [triggerBtn, setTriggerBtn] = useState('start');
  const [pauseStart, setPauseStart] = useState<any>();
  const [breakTime, setBreakTime] = useState<any>(0);
  const [totalTime, setTotalTime] = useState(settings[props.time] * 60);

  const timeChecker = () => {
    const dt = (Date.now() - startTime - breakTime);
    const elapsed = Math.floor( dt/ 1000);
    setElapsedTime(elapsed);
  };

  useEffect(() => {
    if(totalTime !== (settings[props.time] * 60)) {
      setElapsedTime(0);
      setCurrState(TimerState.ready);
      setMinRem(settings[props.time]);
      setSecRem(0);
      setTriggerBtn('start');
      setBreakTime(0);
      setTotalTime(settings[props.time] * 60);
    }
  }, [settings, props.time, totalTime]);

  useInterval(timeChecker, currState === TimerState.running ? 1000 : null);
  // start, stop
  const triggerHandler = () => {
    // if current timer state is ready, initialize a new timer;
    if(currState === TimerState.ready || currState === TimerState.complete) {
      setStartTime(Date.now());
      setElapsedTime(0);
      setBreakTime(0);
      setCurrState(TimerState.running);
      setTriggerBtn('stop');
    }
    if(currState === TimerState.stopped) {
      setBreakTime(breakTime + (Date.now() - pauseStart));
      setCurrState(TimerState.running);
      setTriggerBtn('stop');
    }
    if(currState === TimerState.running) {
      setPauseStart(Date.now());
      setCurrState(TimerState.stopped);
      setTriggerBtn('start');
    }
  };

  useEffect(() => {
    if(currState === TimerState.running) {
      const rem = totalTime - elapsedTime;
      const min = rem < 60 ? 0 : Math.floor(rem/60);
      const sec = rem%60;
      if(rem === 0) {
        // stop timer
        setCurrState(TimerState.complete);
        setTriggerBtn('start');
      }
      setMinRem(min);
      setSecRem(sec);
    }
  }, [elapsedTime, currState, totalTime]);

  return (
    <div className="timer">
      <div className="timer-display">
        <div className="inner-container">
          <ProgressRing radius={169.5} stroke={8} progress={100 - Math.floor(elapsedTime / totalTime * 100)} />
          <span className="timer-time">{minRem}:{secRem < 10 ? `0${secRem}` : secRem}</span>
          <button className="timer-trigger-btn" onClick={triggerHandler}>{triggerBtn}</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;