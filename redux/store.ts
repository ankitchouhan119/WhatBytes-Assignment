// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slice';  // Importing the rootReducer from the slice

// Create and configure the store
const store = configureStore({
  reducer: rootReducer,  // Combine reducers if you have multiple slices
});

export type RootState = ReturnType<typeof store.getState>; // Type for the state
export type AppDispatch = typeof store.dispatch; // Type for dispatch

export default store;
