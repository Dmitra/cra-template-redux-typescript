import { createFeature } from '../../utils'
import initialState, { reducers } from './state'
import * as selectors from './selectors'
import { CounterState } from './model'

export default createFeature<CounterState, typeof reducers>({
  name: 'counter',
  initialState,
  reducers,
  selectors,
})
