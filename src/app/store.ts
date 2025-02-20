import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

import adminReducer from '../features/admin/redux/adminSlice.ts'


const adminPersistConfig = {
    key: "admin",
    version: 1,
    storage,
};

const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer)

export const store = configureStore({
    reducer: {
        admin: persistedAdminReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

