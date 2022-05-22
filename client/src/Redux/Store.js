import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './Reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})