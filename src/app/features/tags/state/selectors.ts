import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITagState } from 'src/app/features/tags/models/state-models/tag.state';

export const getTagFeatureState = createFeatureSelector<ITagState>('tags');

// Overview
export const overviewResults= createSelector(
    getTagFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getTagFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getTagFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getTagFeatureState,
    (state) => state.overview.error
);


// Details
export const detailsResult= createSelector(
    getTagFeatureState,
    (state) => state.details.result
);

export const detailsRequiresReload = createSelector(
    getTagFeatureState,
    (state) => state.details.requiresReload
);

export const detailsIsLoading = createSelector(
    getTagFeatureState,
    (state) => state.details.isLoading
);

export const detailsError = createSelector(
    getTagFeatureState,
    (state) => state.details.error
);