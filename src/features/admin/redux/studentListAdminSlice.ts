import { createSlice } from "@reduxjs/toolkit";
import { StudentAcademicProfileListType } from "../../../app/types/StudentType";


const initialState: StudentAcademicProfileListType[] = [];


const studentListAdminSlice = createSlice({
    name: 'studentListAdmin',
    initialState,
    reducers: {
        setStudentList: (_, action) => {
            return action.payload
        }
    }
})


export const {setStudentList} = studentListAdminSlice.actions;
export const studentListAdminReducer = studentListAdminSlice.reducer;