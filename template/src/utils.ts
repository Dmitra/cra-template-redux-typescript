import { createSlice, ValidateSliceCaseReducers, SliceCaseReducers, Slice } from '@reduxjs/toolkit'

interface CreateFeatureParams<Model, Reducers extends SliceCaseReducers<Model>> {
  name?: string,
  initialState: Model,
  reducers: ValidateSliceCaseReducers<Model, Reducers>,
  selectors: any,
}

export function createFeature<Model, Reducers extends SliceCaseReducers<Model>>({
  name = '',
  initialState,
  reducers,
  selectors
}: CreateFeatureParams<Model, Reducers>): Slice<Model> & { selectors: typeof selectors } {
  const slice = createSlice<Model, Reducers, string>({
    name,
    initialState,
    reducers
  })

  return {
    ...slice,
    selectors,
  }
}
