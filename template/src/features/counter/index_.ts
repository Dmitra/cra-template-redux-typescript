import { createFeature, GenericState } from '../../utils'
import * as model from './model'
import initialState, * as reducers from './state'
import * as selectors from './selectors'

export default createFeature({ name: 'counter',
  model,
  initialState: initialState as GenericState<typeof initialState>,
  reducers,
  selectors,
})
