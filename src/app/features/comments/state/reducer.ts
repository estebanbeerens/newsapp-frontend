import { createReducer, on } from '@ngrx/store';
import { ICommentState, ICommentStateInitialValue } from 'src/app/features/comments/models/state-models/comment.state';
import * as actions from './actions';

export const commentReducer = createReducer<ICommentState>(
    ICommentStateInitialValue,

    // Overview
    on(actions.getByArticleId, (state): ICommentState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.getByArticleIdSuccess, (state, action): ICommentState => {
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
    on(actions.getByArticleIdFailure, (state, action): ICommentState => {
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
    on(actions.getByArticleIdNoChanges, (state): ICommentState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: false
        }
      };
    }),

    // Create
    on(actions.create, (state): ICommentState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.createSuccess, (state): ICommentState => {
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
    on(actions.createFailure, (state, action): ICommentState => {
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
    on(actions.remove, (state): ICommentState => {
      return {
        ...state,
        overview: {
          ...state.overview,
          isLoading: true
        }
      };
    }),
    on(actions.removeSuccess, (state): ICommentState => {
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
    on(actions.removeFailure, (state, action): ICommentState => {
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