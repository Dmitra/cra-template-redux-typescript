import { createSlice, ValidateSliceCaseReducers, SliceCaseReducers } from '@reduxjs/toolkit'
import { RootState } from './app/store';

// export function createFeature<
//   Name extends string,
//   Model,
//   State,
//   Reducers extends ValidateSliceCaseReducers<State>,
//   Selectors,
//   > (name: Name, model: Model, initialState: State, reducers: Reducers, selectors: Selectors) {
//   const slice = createSlice({
//     name,
//     initialState,
//     reducers,
//   })
//
//   return {
//     model,
//     actions: slice.actions,
//     reducer: slice.reducer,
//     select: selectors,
//   }
// }

export interface GenericState<T> {
  data?: T
}

export const createFeature = <
  T,
  Model,
  Reducers extends SliceCaseReducers<GenericState<T>>,
  Selectors,
>({ name, model, initialState, reducers, selectors }: {
  name: string
  model: Model,
  initialState: GenericState<T>
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>
  selectors: Selectors,
}) => {
  const slice = createSlice({
    name,
    initialState,
    reducers,
  })

  return {
    model,
    actions: slice.actions,
    reducer: slice.reducer,
    select: selectors,
  }
}