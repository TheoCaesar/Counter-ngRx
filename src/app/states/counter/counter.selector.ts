import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCounterState = (state:AppState) => state.counter_

export const selectCount = createSelector(
  selectCounterState,
  (state) =>  state._count_
)

