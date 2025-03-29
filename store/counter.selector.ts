import { createSelector } from "@ngrx/store";
import { appState } from "./app.state";

export const selectCounterState = (state: appState) => state.counter;

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
