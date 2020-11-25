import { createReducer, on } from '@ngrx/store';
import { IArticleDetailsStateInitialValue } from 'src/app/features/articles/models/state-models/article-details.state';
import { IArticleState, IArticleStateInitialValue } from 'src/app/features/articles/models/state-models/article.state';
import * as actions from './actions';

export const articleReducer = createReducer<IArticleState>(
    IArticleStateInitialValue,
    
  // Overview
  on(actions.getOverview, (state): IArticleState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: true
      }
    };
  }),
  on(actions.getOverviewSuccess, (state, action): IArticleState => {
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
  on(actions.getOverviewFailure, (state, action): IArticleState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IArticleState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Details
  on(actions.getDetails, (state): IArticleState => {
    return {
      ...state,
      details: {
        ...IArticleDetailsStateInitialValue,
        isLoading: true,
        error: ''
      }
    };
  }),
  on(actions.getDetailsSuccess, (state, action): IArticleState => {
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
  on(actions.getDetailsFailure, (state, action): IArticleState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IArticleState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Reset Details
  on(actions.resetDetails, (state): IArticleState => {
    return {
      ...state,
      details: {
        ...IArticleDetailsStateInitialValue,
        isLoading: false,
        error: ''
      }
    };
  }),

  // Create
  on(actions.createSuccess, (state, action): IArticleState => {
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
  on(actions.createFailure, (state, action): IArticleState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),

  // Update
  on(actions.updateSuccess, (state, action): IArticleState => {
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
  on(actions.updateFailure, (state, action): IArticleState => {
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
  on(actions.removeSuccess, (state): IArticleState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        requiresReload: true
      },
    };
  }),
  on(actions.removeFailure, (state): IArticleState => {
    return {
      ...state
    };
  })
);