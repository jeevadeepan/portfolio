import React from 'react';
import { Provider } from 'react-redux';
import Pomodoro from './Pomodoro';
import store from './store';

function PomodoroApp() {

    return (
        <Provider store={store}>
            <Pomodoro />
        </Provider>
    );
}

export default PomodoroApp;
