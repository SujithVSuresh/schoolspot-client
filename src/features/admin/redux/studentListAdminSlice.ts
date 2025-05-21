import { createSlice } from "@reduxjs/toolkit";
import { StudentUserProfileType } from "../../../app/types/UserType";


const initialState: StudentUserProfileType[] = [];


const studentListAdminSlice = createSlice({
    name: 'studentListAdmin',
    initialState,
    reducers: {
        setStudentList: (state, action) => {
            return action.payload
        }
    }
})


export const {setStudentList} = studentListAdminSlice.actions;
export const studentListAdminReducer = studentListAdminSlice.reducer;