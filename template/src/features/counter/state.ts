import { PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from './model'

export default {
  value: 0,
  status: 'idle',
} as CounterState

export function increment (state: CounterState) {
  state.value += 1
}

export function decrement (state: CounterState) {
  state.value -= 1
}

export function incrementByAmount (state: CounterState, action: PayloadAction<number>) {
  state.value += action.payload;
}

export const extraReducers = {
  'counter/pending': (state: CounterState) => {
    state.status = 'loading'
  },
  'counter/fulfilled': (state: CounterState, action: PayloadAction<number>) => {
    state.status = 'idle'
    state.value += action.payload
  },
  'counter/rejected': (state: CounterState) => {
    state.status = 'failed'
  },
}