import { createReducer, on } from '@ngrx/store';
import { IArticleDetailsStateInitialValue } from 'src/app/features/articles/models/state-models/article-details.state';
import { IDraftState, IDraftStateInitialValue } from 'src/app/features/drafts/models/state-models/draft.state';
import * as actions from './actions';

export const draftReducer = createReducer<IDraftState>(
  IDraftStateInitialValue,
    
  // Overview
  on(actions.getOverview, (state): IDraftState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: true
      }
    };
  }),
  on(actions.getOverviewSuccess, (state, action): IDraftState => {
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
  on(actions.getOverviewFailure, (state, action): IDraftState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IDraftState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Details
  on(actions.getDetails, (state): IDraftState => {
    return {
      ...state,
      details: {
        ...IArticleDetailsStateInitialValue,
        isLoading: true,
        error: ''
      }
    };
  }),
  on(actions.getDetailsSuccess, (state, action): IDraftState => {
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
  on(actions.getDetailsFailure, (state, action): IDraftState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IDraftState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Reset Details
  on(actions.resetDetails, (state): IDraftState => {
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
  on(actions.createSuccess, (state, action): IDraftState => {
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
  on(actions.createFailure, (state, action): IDraftState => {
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
  on(actions.updateSuccess, (state, action): IDraftState => {
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
  on(actions.updateFailure, (state, action): IDraftState => {
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
  on(actions.removeSuccess, (state): IDraftState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        requiresReload: true
      },
    };
  }),
  on(actions.removeFailure, (state): IDraftState => {
    return {
      ...state
    };
  })
);