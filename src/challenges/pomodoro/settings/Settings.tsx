import React, { useState } from 'react';
import './Settings.scss';
import CloseIcon from '../assets/img/icon-close.svg';
import TickIcon from '../assets/img/icon-tick.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings, update } from './settingsSlice';

function Settings(props: any) {

    const settings = useSelector(selectSettings);
    const [localSettings, setLocalSettings] = useState(settings);
    const settingsApplyHandler = () => { };
    const dispatch = useDispatch();

    const settingsChangeHandler = (key: any, value: any) => {
        const newSettings: any = { ...localSettings };
        newSettings[key] = value;
        setLocalSettings(newSettings);
    };

    const getFontOptions = () => ['kumbhsans', 'robotoslab', 'spacemono'].map((fontname, index) => {
        let className = `pd-font-option ${fontname}`;
        let checked = false;
        if (fontname === localSettings.font) {
            className += ' selected';
            checked = true;
        }
        return <li className={className} key={`font-${index}`} role="radio" aria-checked={checked} tabIndex={index === 0 ? 0 : -1} onClick={() => settingsChangeHandler('font', fontname)}>Aa</li>;
    });

    const getColorOptions = () => ['red', 'blue', 'purple'].map((colorname, index) => {
        let className = `pd-color-option ${colorname}`;
        let checked = false;
        if (colorname === localSettings.color) {
            checked = true;
        }
        return <li className={className} key={`color-${index}`} role="radio" aria-checked={checked} tabIndex={index === 0 ? 0 : -1} onClick={() => settingsChangeHandler('color', colorname)}>
            {checked && <img src={TickIcon} alt="Checked" />}
        </li>;
    });

    return (
        <div className="pd-settings-overlay">
            <div className='pd-settings' role='dialog' aria-labelledby='pd-settings-title'>
                <div className='pd-settings-header'>
                    <h2 id='pd-settings-title'>Settings</h2>
                    <button id='pd-settings-close' onClick={props.closeHandler.bind(null, false)}><img src={CloseIcon} alt="Close Settings" /></button>
                </div>
                <form onSubmit={settingsApplyHandler}>
                    <fieldset className='pd-timer-fs'>
                        <h3 className='pd-time-heading'>Time (Minutes)</h3>
                        <div className="pd-timer-container">
                            <label>pomodoro
                                <input type="number" value={localSettings.pmTime} onChange={(event: any) => settingsChangeHandler('pmTime', event.target.value)} />
                            </label>
                            <label>short break
                                <input type="number" value={localSettings.sbTime} onChange={(event: any) => settingsChangeHandler('sbTime', event.target.value)} />
                            </label>
                            <label>long break
                                <input type="number" value={localSettings.lbTime} onChange={(event: any) => settingsChangeHandler('lbTime', event.target.value)} />
                            </label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3 id='pd-font-label'>Font</h3>
                        <ul className="pd-font-options" role='radiogroup' aria-labelledby='pd-font-label'>
                            {getFontOptions()}
                        </ul>
                    </fieldset>
                    <fieldset className='pd-color-fs'>
                        <h3 id='pd-color-label'>Color</h3>
                        <ul className="pd-color-options" role='radiogroup' aria-labelledby='pd-color-label'>
                            {getColorOptions()}
                        </ul>
                    </fieldset>
                    <button type="submit" id='pd-settings-apply-btn' onClick={(event) => { event.preventDefault(); dispatch(update(localSettings)); props.closeHandler(false)}}>Apply</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;