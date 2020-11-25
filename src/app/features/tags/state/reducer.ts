import { createReducer, on } from '@ngrx/store';
import { ITagDetailsStateInitialValue } from 'src/app/features/tags/models/state-models/tag-details.state';
import { ITagState, ITagStateInitialValue } from 'src/app/features/tags/models/state-models/tag.state';
import * as actions from './actions';

export const tagReducer = createReducer<ITagState>(
    ITagStateInitialValue,
    
  // Overview
  on(actions.getOverview, (state): ITagState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: true
      }
    };
  }),
  on(actions.getOverviewSuccess, (state, action): ITagState => {
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
  on(actions.getOverviewFailure, (state, action): ITagState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): ITagState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Details
  on(actions.getDetails, (state): ITagState => {
    return {
      ...state,
      details: {
        ...ITagDetailsStateInitialValue,
        isLoading: true,
        error: ''
      }
    };
  }),
  on(actions.getDetailsSuccess, (state, action): ITagState => {
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
  on(actions.getDetailsFailure, (state, action): ITagState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): ITagState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Reset Details
  on(actions.resetDetails, (state): ITagState => {
    return {
      ...state,
      details: {
        ...ITagDetailsStateInitialValue,
        isLoading: false,
        error: ''
      }
    };
  }),

  // Create
  on(actions.createSuccess, (state, action): ITagState => {
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
  on(actions.createFailure, (state, action): ITagState => {
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
  on(actions.updateSuccess, (state, action): ITagState => {
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
  on(actions.updateFailure, (state, action): ITagState => {
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
  on(actions.removeSuccess, (state): ITagState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        requiresReload: true
      },
    };
  }),
  on(actions.removeFailure, (state): ITagState => {
    return {
      ...state
    };
  })
);