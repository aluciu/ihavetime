import { configureStore } from '@reduxjs/toolkit'
// import {firestoreReducer} from "redux-firestore";

import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});