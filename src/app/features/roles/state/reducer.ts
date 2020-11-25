import { createReducer, on } from '@ngrx/store';
import { IRoleState, IRoleStateInitialValue } from 'src/app/features/roles/models/state-models/role.state';
import * as actions from './actions';

export const roleReducer = createReducer<IRoleState>(
    IRoleStateInitialValue,

    // Overview
    on(actions.getOverview, (state): IRoleState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.getOverviewSuccess, (state, action): IRoleState => {
      return {
        ...state,
        overview: {
          results: action.responseModel,
          requiresReload: false,
          isLoading: false,
          error: ''
        }
      };
    }),
    on(actions.getOverviewFailure, (state, action): IRoleState => {
      return {
        ...state,
        overview: {
          results: [],
          requiresReload: true,
          isLoading: false,
          error: action.error
        }
      };
    }),
    on(actions.getOverviewNoChanges, (state): IRoleState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: false
        }
      };
    }
    ),
);