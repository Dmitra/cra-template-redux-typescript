import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppThunk } from '../../app/store'
import { fetchCount } from './counterAPI'

import Counter from './index'

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)

export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = Counter.select.selectCount(getState())
  if (currentValue % 2 === 1) {
    dispatch(Counter.actions.incrementByAmount(amount))
  }
}