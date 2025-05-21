import { createSlice } from "@reduxjs/toolkit";
import { SchoolProfileType } from "../types/types";

const initialState: SchoolProfileType = {
    schoolName: '',
    email: '',
    phoneNumber: '',
    principalName: '',
    yearEstablished: 0,
    regNumber: '',
    totalStudents: 0,
    totalTeachers: 0,
    board: '',
    city: '',
    country: '',
    state: '',
    academicYear: '',
    postalCode: '',
    websiteUrl: ''
}

const schoolProfileSlice = createSlice({
    name: 'schoolProfile',
    initialState,
    reducers: {
        setSchoolProfile: (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

export const {setSchoolProfile} = schoolProfileSlice.actions;
export const schoolProfileReducer = schoolProfileSlice.reducer;

