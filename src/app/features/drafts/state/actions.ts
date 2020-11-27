import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/features/Articles/models/entities/article';

// Get Overview
export const getOverview = createAction(
    '[Drafts] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[Drafts] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[Drafts] Get Overview Success',
    props<{ responseModel: IArticle[] }>()
);

export const getOverviewFailure = createAction(
    '[Drafts] Get Overview Failure',
    props<{ error: string }>()
);


// Get Details
export const getDetails = createAction(
    '[Drafts] Get Details',
    props<{ id: number }>()
);

export const getDetailsNoChanges = createAction(
    '[Drafts] Get Details No Changes'
);

export const getDetailsSuccess = createAction(
    '[Drafts] Get Details Success',
    props<{ responseModel: IArticle }>()
);

export const getDetailsFailure = createAction(
    '[Drafts] Get Details Failure',
    props<{ error: string }>()
);

// Reset Details
export const resetDetails = createAction(
    '[Drafts] Reset Details'
);


// Create
export const create = createAction(
    '[Drafts] Create',
    props<{ inputModel: IArticle }>()
);

export const createSuccess = createAction(
    '[Drafts] Create Success',
    props<{ responseModel: IArticle }>()
);

export const createFailure = createAction(
    '[Drafts] Create Failure',
    props<{ error: string }>()
);


// Update
export const update = createAction(
    '[Drafts] Update',
    props<{ id: number, inputModel: IArticle }>()
);

export const updateSuccess = createAction(
    '[Drafts] Update Success',
    props<{ responseModel: IArticle }>()
);

export const updateFailure = createAction(
    '[Drafts] Update Failure',
    props<{ error: string }>()
);


// Remove
export const remove = createAction(
    '[Drafts] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Drafts] Remove Success'
);

export const removeFailure = createAction(
    '[Drafts] Remove Failure',
    props<{ error: string }>()
);