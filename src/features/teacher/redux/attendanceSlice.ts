import { createSlice } from "@reduxjs/toolkit";


const initialState: {presentCount: number; absentCount: number} = {
    presentCount: 0,
    absentCount: 0
}


const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        setAttendanceCount: (state, action) => {
            return {...state, ...action.payload}
        },

    }
})


export const {setAttendanceCount} = attendanceSlice.actions;
export const attendanceReducer = attendanceSlice.reducer;