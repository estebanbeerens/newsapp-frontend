import { createReducer, on } from '@ngrx/store';
import { IUserDetailsStateInitialValue } from 'src/app/features/users/models/state-models/user-details.state';
import { IUserState, IUserStateInitialValue } from 'src/app/features/users/models/state-models/user.state';
import * as actions from './actions';

export const userReducer = createReducer<IUserState>(
  IUserStateInitialValue,
    
  // Overview
  on(actions.getOverview, (state): IUserState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: true
      }
    };
  }),
  on(actions.getOverviewSuccess, (state, action): IUserState => {
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
  on(actions.getOverviewFailure, (state, action): IUserState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IUserState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Details
  on(actions.getDetails, (state): IUserState => {
    return {
      ...state,
      details: {
        ...IUserDetailsStateInitialValue,
        isLoading: true,
        error: ''
      }
    };
  }),
  on(actions.getDetailsSuccess, (state, action): IUserState => {
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
  on(actions.getDetailsFailure, (state, action): IUserState => {
    return {
      ...state,
      details: {
        ...state.details,
        isLoading: false,
        error: action.error
      }
    };
  }),
  on(actions.getOverviewNoChanges, (state): IUserState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        isLoading: false
      }
    };
  }),

  // Reset Details
  on(actions.resetDetails, (state): IUserState => {
    return {
      ...state,
      details: {
        ...IUserDetailsStateInitialValue,
        isLoading: false,
        error: ''
      }
    };
  }),

  // Create
  on(actions.createSuccess, (state, action): IUserState => {
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
  on(actions.createFailure, (state, action): IUserState => {
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
  on(actions.removeSuccess, (state): IUserState => {
    return {
      ...state,
      overview: {
        ...state.overview,
        requiresReload: true
      },
    };
  }),
  on(actions.removeFailure, (state): IUserState => {
    return {
      ...state
    };
  })
);