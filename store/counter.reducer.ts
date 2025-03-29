import { createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementCounter } from "./counter.action";

export interface counterState {
  count: number;
}

export const intialCount: counterState = {
  count: 0,
};

export const reducer = createReducer(
  intialCount,
  on(incrementCounter, (state) => ({ ...state, count: state.count + 1 })),
  on(decrementCounter, (state) => ({ ...state, count: state.count - 1 }))
);
