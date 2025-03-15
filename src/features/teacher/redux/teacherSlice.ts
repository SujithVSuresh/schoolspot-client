import { createSlice } from "@reduxjs/toolkit";
import { UserStoreType } from "../../admin/types/types";


const initialState: UserStoreType = {
    _id: '',
    email: '',
    role: '',
    status: '',
    accessToken: null,
}


const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        setTeacher: (state, action) => {
            return {...state, ...action.payload}
        },
        removeTeacher: () => {
            return initialState
        }
    }
})


export const {setTeacher, removeTeacher} = teacherSlice.actions;
export const teacherReducer = teacherSlice.reducer;