import { createReducer,on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export interface CounterState {
  _count_: number;
}

export const initialCounterState:CounterState = {
  _count_: 10012
}

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, state => ({ ...state, _count_: state._count_ + 1 })),
  on(decrement, state => {return {...state, _count_:state._count_ - 1}}),
  on(reset, state => ({...state, _count_:0}))
)
