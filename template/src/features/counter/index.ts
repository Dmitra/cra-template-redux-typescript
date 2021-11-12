import _ from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import * as model from './model'
import initialState, * as reducers from './state'
import * as selectors from './selectors'

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: _.pickBy(reducers, _.isFunction),
})

export default {
  model,
  actions: slice.actions,
  reducer: slice.reducer,
  select: selectors,
}