// frontend/src/store/indexRedux.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import courseReducer from './courseReducer';


// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer, 
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
