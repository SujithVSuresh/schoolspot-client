import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

import {adminReducer} from '../features/admin/redux/adminSlice.ts'
import { schoolProfileReducer } from "../features/admin/redux/schoolProfileSlice.ts";
import { studentReducer } from "../features/student/redux/studentSlice.tsx";

const adminPersistConfig = {
    key: "admin",
    version: 1,
    storage,
};

const studentPersistConfig = {
    key: "student",
    version: 1,
    storage
}

const schoolProfilePersistConfig = {
    key: "schoolProfile",
    version: 1,
    storage,
};

const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer)
const persistedStudentReducer = persistReducer(studentPersistConfig, studentReducer)
const persistedSchoolProfileReducer = persistReducer(schoolProfilePersistConfig, schoolProfileReducer)

export const store = configureStore({
    reducer: {
        admin: persistedAdminReducer,
        student: persistedStudentReducer,
        schoolProfile: persistedSchoolProfileReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store)

