import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './settings/settingsSlice';

export default configureStore({
    reducer: {
        settings: settingsReducer
    }
});