import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IReviewState } from 'src/app/features/reviews/models/state-models/review.state';

export const getReviewFeatureState = createFeatureSelector<IReviewState>('reviews');

// Overview
export const overviewResults= createSelector(
    getReviewFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getReviewFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getReviewFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getReviewFeatureState,
    (state) => state.overview.error
);


// Details
export const detailsResult= createSelector(
    getReviewFeatureState,
    (state) => state.details.result
);

export const detailsRequiresReload = createSelector(
    getReviewFeatureState,
    (state) => state.details.requiresReload
);

export const detailsIsLoading = createSelector(
    getReviewFeatureState,
    (state) => state.details.isLoading
);

export const detailsError = createSelector(
    getReviewFeatureState,
    (state) => state.details.error
);