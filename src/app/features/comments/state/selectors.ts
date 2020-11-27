import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICommentState } from 'src/app/features/comments/models/state-models/comment.state';

export const getCommentFeatureState = createFeatureSelector<ICommentState>('comments');

// Overview
export const overviewResults= createSelector(
    getCommentFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getCommentFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getCommentFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getCommentFeatureState,
    (state) => state.overview.error
);
