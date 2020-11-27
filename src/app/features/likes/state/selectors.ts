import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILikeState } from 'src/app/features/likes/models/state-models/like.state';

export const getLikeFeatureState = createFeatureSelector<ILikeState>('likes');

// Overview
export const overviewResults= createSelector(
    getLikeFeatureState,
    (state) => state.overview.results
);

export const overviewArticleId = createSelector(
    getLikeFeatureState,
    (state) => state.overview.articleId
);

export const overviewIsLoading = createSelector(
    getLikeFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getLikeFeatureState,
    (state) => state.overview.error
);
