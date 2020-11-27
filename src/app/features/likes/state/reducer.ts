import { createReducer, on } from '@ngrx/store';
import { ILikeState, ILikeStateInitialValue } from 'src/app/features/likes/models/state-models/like.state';
import * as actions from './actions';

export const likeReducer = createReducer<ILikeState>(
    ILikeStateInitialValue,

    // Overview
    on(actions.getByArticleId, (state): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.getByArticleIdSuccess, (state, action): ILikeState => {
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
    on(actions.getByArticleIdFailure, (state, action): ILikeState => {
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
    on(actions.getByArticleIdNoChanges, (state): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: false
        }
      };
    }),

    // Create
    on(actions.create, (state): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.createSuccess, (state): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          requiresReload: true,
          isLoading: false,
          error: ''
        }
      };
    }),
    on(actions.createFailure, (state, action): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          requiresReload: true,
          isLoading: false,
          error: action.error
        }
      };
    }),

    // Remove
    on(actions.remove, (state): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.removeSuccess, (state): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          requiresReload: true,
          isLoading: false,
          error: ''
        }
      };
    }),
    on(actions.removeFailure, (state, action): ILikeState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          requiresReload: true,
          isLoading: false,
          error: action.error
        }
      };
    }),
    
);