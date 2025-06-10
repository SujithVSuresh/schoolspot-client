import { createSlice } from "@reduxjs/toolkit";
import { StudentProfileType } from "../../../app/types/StudentType";


const initialState: StudentProfileType[] = [];


const studentListSlice = createSlice({
    name: 'studentList',
    initialState,
    reducers: {
        setStudentList: (_, action) => {
            return action.payload
        }
    }
})


export const {setStudentList} = studentListSlice.actions;
export const studentListReducer = studentListSlice.reducer;