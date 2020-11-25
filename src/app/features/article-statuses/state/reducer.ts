import { createReducer, on } from '@ngrx/store';
import { IArticleStatusState, IArticleStatusStateInitialValue } from 'src/app/features/article-statuses/models/state-models/article-status.state';
import * as actions from './actions';

export const articleStatusReducer = createReducer<IArticleStatusState>(
    IArticleStatusStateInitialValue,

    // Overview
    on(actions.getOverview, (state): IArticleStatusState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.getOverviewSuccess, (state, action): IArticleStatusState => {
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
    on(actions.getOverviewFailure, (state, action): IArticleStatusState => {
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
    on(actions.getOverviewNoChanges, (state): IArticleStatusState => {
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