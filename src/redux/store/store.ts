import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer/rootReducer';

export type TRootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,
});
