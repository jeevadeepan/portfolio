import React, { useState } from 'react';
import './Settings.scss';
import CloseIcon from '../assets/img/icon-close.svg';
import TickIcon from '../assets/img/icon-tick.svg';

function Settings(props: any) {

    const [pdTimer, setPdTimer] = useState(25);
    const [sbTimer, setSbTimer] = useState(5);
    const [lbTimer, setLbTimer] = useState(15);
    const settingsApplyHandler = () => { };
    return (
        <div className="pd-settings-overlay">
            <div className='pd-settings' role='dialog' aria-labelledby='pd-settings-title'>
                <div className='pd-settings-header'>
                    <h2 id='pd-settings-title'>Settings</h2>
                    <button id='pd-settings-close'><img src={CloseIcon} alt="Close Settings" onClick={props.closeHandler.bind(null, false)} /></button>
                </div>
                <form onSubmit={settingsApplyHandler}>
                    <fieldset className='pd-timer-fs'>
                        <h3 className='pd-time-heading'>Time (Minutes)</h3>
                        <div className="pd-timer-container">
                            <label>pomodoro
                                <input type="number" value={pdTimer}/>
                            </label>
                            <label>short break
                                <input type="number" value={sbTimer}/>
                            </label>
                            <label>long break
                                <input type="number" value={lbTimer}/>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3 id='pd-font-label'>Font</h3>
                        <ul className="pd-font-options" role='radiogroup' aria-labelledby='pd-font-label'>
                            <li className="pd-font-option selected">Aa</li>
                            <li className="pd-font-option">Aa</li>
                            <li className="pd-font-option">Aa</li>
                        </ul>
                    </fieldset>
                    <fieldset className='pd-color-fs'>
                        <h3 id='pd-color-label'>Color</h3>
                        <ul className="pd-color-options" role='radiogroup' aria-labelledby='pd-color-label'>
                            <li className="pd-color-option" style={{backgroundColor: '#F87070'}}><img src={TickIcon} alt="Close Settings" /></li>
                            <li className="pd-color-option" style={{backgroundColor: '#70F3F8'}}></li>
                            <li className="pd-color-option" style={{backgroundColor: '#D881F8'}}></li>
                        </ul>
                    </fieldset>
                    <button type="submit" id='pd-settings-apply-btn'>Apply</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;