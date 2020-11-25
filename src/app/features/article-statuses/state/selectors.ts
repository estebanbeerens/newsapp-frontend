import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IArticleStatusState } from 'src/app/features/article-statuses/models/state-models/article-status.state';

export const getArticleStatusFeatureState = createFeatureSelector<IArticleStatusState>('article-statuses');

// Overview
export const overviewResults= createSelector(
    getArticleStatusFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getArticleStatusFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getArticleStatusFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getArticleStatusFeatureState,
    (state) => state.overview.error
);