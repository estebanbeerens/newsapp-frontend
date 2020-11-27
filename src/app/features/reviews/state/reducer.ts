import { createReducer, on } from '@ngrx/store';
import { IArticleDetailsStateInitialValue } from 'src/app/features/articles/models/state-models/article-details.state';
import { IReviewState, IReviewStateInitialValue } from 'src/app/features/reviews/models/state-models/review.state';
import * as actions from './actions';

export const reviewReducer = createReducer<IReviewState>(
  IReviewStateInitialValue,
    
  // Overview
  on(actions.getOverview, (state): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: true
      }
    };
  }),
  on(actions.getOverviewSuccess, (state, action): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        results: action.responseModel,
        requiresReload: false,
        isLoading: false,
        error: ''
      }
    };
  }),
  on(actions.getOverviewFailure, (state, action): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Details
  on(actions.getDetails, (state): IReviewState => {
    return {
      ...state,
      details: {
        ...IArticleDetailsStateInitialValue,
        isLoading: true,
        error: ''
      }
    };
  }),
  on(actions.getDetailsSuccess, (state, action): IReviewState => {
    return {
      ...state,
      details: {
        ...state.details,
        result: action.responseModel,
        isLoading: false,
        error: ''
      }
    };
  }),
  on(actions.getDetailsFailure, (state, action): IReviewState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Reset Details
  on(actions.resetDetails, (state): IReviewState => {
    return {
      ...state,
      details: {
        ...IArticleDetailsStateInitialValue,
        isLoading: false,
        error: ''
      }
    };
  }),

  // Update
  on(actions.updateSuccess, (state, action): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        requiresReload: true
      },
      details: {
        ...state.details,
        result: action.responseModel,
        isLoading: false,
        error: ''
      }
    };
  }),
  on(actions.updateFailure, (state, action): IReviewState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),

  // Delete
  on(actions.removeSuccess, (state): IReviewState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        requiresReload: true
      },
    };
  }),
  on(actions.removeFailure, (state): IReviewState => {
    return {
      ...state
    };
  })
);