import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

import {adminReducer} from '../features/admin/redux/adminSlice.ts'
import { schoolProfileReducer } from "../features/admin/redux/schoolProfileSlice.ts";
import { studentReducer } from "../features/student/redux/studentSlice.tsx";
import { teacherReducer } from "../features/teacher/redux/teacherSlice.ts";
import { attendanceReducer } from "../features/teacher/redux/attendanceSlice.ts";

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

const teacherPersistConfig = {
    key: "teacher",
    version: 1,
    storage,
};

const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer)
const persistedStudentReducer = persistReducer(studentPersistConfig, studentReducer)
const persistedTeacherReducer = persistReducer(teacherPersistConfig, teacherReducer)
const persistedSchoolProfileReducer = persistReducer(schoolProfilePersistConfig, schoolProfileReducer)

export const store = configureStore({
    reducer: {
        admin: persistedAdminReducer,
        student: persistedStudentReducer,
        teacher: persistedTeacherReducer,
        schoolProfile: persistedSchoolProfileReducer,
        attendance: attendanceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store)

