import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICoreState } from 'src/app/shared/state/core/core.state';

const getCoreFeatureState = createFeatureSelector<ICoreState>('core');

export const toggled = createSelector(
  getCoreFeatureState,
  (state) => state.sidenav.toggled
);