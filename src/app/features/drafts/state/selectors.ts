import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDraftState } from 'src/app/features/drafts/models/state-models/draft.state';

export const getdraftFeatureState = createFeatureSelector<IDraftState>('drafts');

// Overview
export const overviewResults= createSelector(
    getdraftFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getdraftFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getdraftFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getdraftFeatureState,
    (state) => state.overview.error
);


// Details
export const detailsResult= createSelector(
    getdraftFeatureState,
    (state) => state.details.result
);

export const detailsRequiresReload = createSelector(
    getdraftFeatureState,
    (state) => state.details.requiresReload
);

export const detailsIsLoading = createSelector(
    getdraftFeatureState,
    (state) => state.details.isLoading
);

export const detailsError = createSelector(
    getdraftFeatureState,
    (state) => state.details.error
);