import { combineReducers } from '@reduxjs/toolkit';
import fishReducer from '../reducers/fishReducer/fishSlice'
import fossilsReducer from '../reducers/fossilsReducer/fossilsSlice'
import villagersSlice from '../reducers/villagersReducer/villagersSlice';


export const combinedReducer = combineReducers({
  fish: fishReducer,
  fossils: fossilsReducer,
  villagers: villagersSlice,
});
