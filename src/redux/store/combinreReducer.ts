import { combineReducers } from '@reduxjs/toolkit';
import fishReducer from '../reducers/fishReducer/fishSlice'
import fossilsReducer from '../reducers/fossilsReducer/fossilsSlice'


export const combinedReducer = combineReducers({
  fish: fishReducer,
  fossils: fossilsReducer,
});
