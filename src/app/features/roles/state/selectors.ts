import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRoleState } from 'src/app/features/roles/models/state-models/role.state';

export const getRoleFeatureState = createFeatureSelector<IRoleState>('roles');

// Overview
export const overviewResults= createSelector(
    getRoleFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getRoleFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getRoleFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getRoleFeatureState,
    (state) => state.overview.error
);