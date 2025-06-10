import { createSlice } from "@reduxjs/toolkit";
import { UserNotificationResponseType } from "../../../app/types/NotificationType";


const initialState: UserNotificationResponseType[] = []


const studentNotificationSlice = createSlice({
    name: 'studentNotification',
    initialState,
    reducers: {
        setStudentNotification: (state, action) => {
            return [...action.payload]
        },
        // removeStudentNotification: (state, action) => {
        //     return [...action.payload]
        // }
    }
})


export const {setStudentNotification} = studentNotificationSlice.actions;
export const studentNotificationReducer = studentNotificationSlice.reducer;