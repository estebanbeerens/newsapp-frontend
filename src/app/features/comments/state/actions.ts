import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/features/comments/models/entities/comment';

// Set Article id
export const setArticleId = createAction(
    '[Comments] Set Article ID',
    props<{ id: number }>()
);


// Get Likes by Article
export const getByArticleId = createAction(
    '[Comments] Get By Article'
);

export const getByArticleIdNoChanges = createAction(
    '[Comments] Get By Article No Changes'
);

export const getByArticleIdSuccess = createAction(
    '[Comments] Get By Article Success',
    props<{ responseModel: IComment[] }>()
);

export const getByArticleIdFailure = createAction(
    '[Comments] Get By Article Failure',
    props<{ error: string }>()
);


// Create Like
export const create = createAction(
    '[Comments] Create',
    props<{ inputModel: IComment }>()
);

export const createSuccess = createAction(
    '[Comments] Create Success',
    props<{ responseModel: IComment }>()
);

export const createFailure = createAction(
    '[Comments] Create Failure',
    props<{ error: string }>()
);


// Remove Like
export const remove = createAction(
    '[Comments] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Comments] Remove Success'
);

export const removeFailure = createAction(
    '[Comments] Remove Failure',
    props<{ error: string }>()
);