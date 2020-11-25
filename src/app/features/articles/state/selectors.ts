import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IArticleState } from 'src/app/features/articles/models/state-models/article.state';

export const getArticleFeatureState = createFeatureSelector<IArticleState>('articles');

// Overview
export const overviewResults= createSelector(
    getArticleFeatureState,
    (state) => state.overview.results
);

export const overviewRequiresReload = createSelector(
    getArticleFeatureState,
    (state) => state.overview.requiresReload
);

export const overviewIsLoading = createSelector(
    getArticleFeatureState,
    (state) => state.overview.isLoading
);

export const overviewError = createSelector(
    getArticleFeatureState,
    (state) => state.overview.error
);


// Details
export const detailsResult= createSelector(
    getArticleFeatureState,
    (state) => state.details.result
);

export const detailsRequiresReload = createSelector(
    getArticleFeatureState,
    (state) => state.details.requiresReload
);

export const detailsIsLoading = createSelector(
    getArticleFeatureState,
    (state) => state.details.isLoading
);

export const detailsError = createSelector(
    getArticleFeatureState,
    (state) => state.details.error
);