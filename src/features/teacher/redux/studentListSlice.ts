import { createSlice } from "@reduxjs/toolkit";
import { StudentAcademicProfileListType } from "../../../app/types/StudentType";


const initialState: StudentAcademicProfileListType[] = [];


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