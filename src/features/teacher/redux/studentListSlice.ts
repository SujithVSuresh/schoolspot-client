import { createSlice } from "@reduxjs/toolkit";
import { StudentUserProfileType } from "../../../app/types/UserType";


const initialState: StudentUserProfileType[] = [];


const studentListSlice = createSlice({
    name: 'studentList',
    initialState,
    reducers: {
        setStudentList: (state, action) => {
            return action.payload
        }
    }
})


export const {setStudentList} = studentListSlice.actions;
export const studentListReducer = studentListSlice.reducer;