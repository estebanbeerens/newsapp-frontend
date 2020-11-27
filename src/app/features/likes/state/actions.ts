import { createAction, props } from '@ngrx/store';
import { ILike } from 'src/app/features/likes/models/entities/like';

// Set Article id
export const setArticleId = createAction(
    '[Comments] Set Article ID',
    props<{ id: number }>()
);


// Get Likes by Article
export const getByArticleId = createAction(
    '[Likes] Get By Article'
);

export const getByArticleIdNoChanges = createAction(
    '[Likes] Get By Article No Changes'
);

export const getByArticleIdSuccess = createAction(
    '[Likes] Get By Article Success',
    props<{ responseModel: ILike[] }>()
);

export const getByArticleIdFailure = createAction(
    '[Likes] Get By Article Failure',
    props<{ error: string }>()
);


// Create Like
export const create = createAction(
    '[Likes] Create',
    props<{ inputModel: ILike }>()
);

export const createSuccess = createAction(
    '[Likes] Create Success',
    props<{ responseModel: ILike }>()
);

export const createFailure = createAction(
    '[Likes] Create Failure',
    props<{ error: string }>()
);


// Remove Like
export const remove = createAction(
    '[Likes] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Likes] Remove Success'
);

export const removeFailure = createAction(
    '[Likes] Remove Failure',
    props<{ error: string }>()
);