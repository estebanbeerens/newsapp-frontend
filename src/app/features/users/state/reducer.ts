import { createReducer, on } from '@ngrx/store';
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
        requiresReload: true,
        isLoading: true
      },
    };
  }),
  on(actions.removeFailure, (state): IUserState => {
    return {
      ...state
    };
  })
);