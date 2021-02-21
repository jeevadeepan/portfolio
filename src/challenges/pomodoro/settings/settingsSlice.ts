import { createSlice } from "@reduxjs/toolkit";

type AppSetting = {
    pmTime: number
    sbTime: number
    lbTime: number
    font: string
    color: string
}

type ACTIONTYPE = {type: string, payload: AppSetting}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        pmTime: 25,
        sbTime: 5,
        lbTime: 10,
        font: 'kumbhsans',
        color: 'red'
    },
    reducers: {
        update: (state: AppSetting, action: ACTIONTYPE) => {
            const {color, font, pmTime, sbTime, lbTime} = action.payload;
            state.color = color;
            state.font = font;
            state.pmTime = pmTime;
            state.sbTime = sbTime;
            state.lbTime = lbTime;
        }
    }
});

export const { update } = settingsSlice.actions;
export const selectSettings = (state: any) => state.settings;

export default settingsSlice.reducer;