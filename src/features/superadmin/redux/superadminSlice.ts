import { createSlice } from "@reduxjs/toolkit";
import { UserStoreType } from "../../admin/types/types";


const initialState: UserStoreType = {
    _id: '',
    email: '',
    role: '',
    status: '',
    accessToken: null,
}


const superadminSlice = createSlice({
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


export const {setSuperAdmin, removeSuperAdmin} = superadminSlice.actions;
export const superAdminReducer = superadminSlice.reducer;