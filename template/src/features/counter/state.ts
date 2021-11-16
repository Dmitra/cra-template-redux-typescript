import { PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from './model'

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export default initialState

function increment (state: CounterState) {
  state.value += 1
}

function decrement (state: CounterState) {
  state.value -= 1
}

function incrementByAmount (state: CounterState, action: PayloadAction<number>) {
  state.value += action.payload;
}

const extraReducers = {
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

export const reducers = {
  increment,
  decrement,
  incrementByAmount,
  ...extraReducers,
}
