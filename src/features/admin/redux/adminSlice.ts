import { createSlice } from "@reduxjs/toolkit";
import { UserStoreType } from "../types/types";



const initialState: UserStoreType = {
    _id: '',
    email: '',
    role: '',
    status: '',
    accessToken: null,
}


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, action) => {
            return {...state, ...action.payload}
        },
        removeAdmin: () => {
            return initialState
        }
    }
})


export const {setAdmin, removeAdmin} = adminSlice.actions;
export default adminSlice.reducer;

