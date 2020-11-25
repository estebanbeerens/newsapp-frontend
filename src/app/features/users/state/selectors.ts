import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from 'src/app/features/users/models/state-models/user.state';

export const getUserFeatureState = createFeatureSelector<IUserState>('users');

// Overview
export const overviewResults= createSelector(
    getUserFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getUserFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getUserFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getUserFeatureState,
    (state) => state.overview.error
);


// Details
export const detailsResult= createSelector(
    getUserFeatureState,
    (state) => state.details.result
);

export const detailsRequiresReload = createSelector(
    getUserFeatureState,
    (state) => state.details.requiresReload
);

export const detailsIsLoading = createSelector(
    getUserFeatureState,
    (state) => state.details.isLoading
);

export const detailsError = createSelector(
    getUserFeatureState,
    (state) => state.details.error
);