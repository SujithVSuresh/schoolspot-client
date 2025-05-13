import { createSlice } from "@reduxjs/toolkit";
import { UserStoreType } from "../../admin/types/types";


const initialState: UserStoreType = {
    _id: '',
    email: '',
    role: '',
    status: '',
    accessToken: null,
}


const superAdminSlice = createSlice({
    name: 'superadmin',
    initialState,
    reducers: {
        setSuperAdmin: (state, action) => {
            return {...state, ...action.payload}
        },
        removeSuperAdmin: () => {
            return initialState
        }
    }
})


export const {setSuperAdmin, removeSuperAdmin} = superAdminSlice.actions;
export const superAdminReducer = superAdminSlice.reducer;