import { combineReducers } from '@reduxjs/toolkit';
import fishReducer from '../reducers/fishReducer/fishSlice'


export const combinedReducer = combineReducers({
  fish: fishReducer,
});
