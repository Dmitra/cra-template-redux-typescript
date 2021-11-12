import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import Counter from '../features/counter'

export const store = configureStore({
  reducer: {
    counter: Counter.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>