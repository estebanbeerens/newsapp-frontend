import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/features/articles/models/entities/article';

// Get Overview
export const getOverview = createAction(
    '[Articles] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[Articles] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[Articles] Get Overview Success',
    props<{ responseModel: IArticle[] }>()
);

export const getOverviewFailure = createAction(
    '[Articles] Get Overview Failure',
    props<{ error: string }>()
);


// Get Details
export const getDetails = createAction(
    '[Articles] Get Details',
    props<{ id: number }>()
);

export const getDetailsNoChanges = createAction(
    '[Articles] Get Details No Changes'
);

export const getDetailsSuccess = createAction(
    '[Articles] Get Details Success',
    props<{ responseModel: IArticle }>()
);

export const getDetailsFailure = createAction(
    '[Articles] Get Details Failure',
    props<{ error: string }>()
);

// Reset Details
export const resetDetails = createAction(
    '[Articles] Reset Details'
);


// Create
export const create = createAction(
    '[Articles] Create',
    props<{ inputModel: IArticle }>()
);

export const createSuccess = createAction(
    '[Articles] Create Success',
    props<{ responseModel: IArticle }>()
);

export const createFailure = createAction(
    '[Articles] Create Failure',
    props<{ error: string }>()
);


// Update
export const update = createAction(
    '[Articles] Update',
    props<{ id: number, inputModel: IArticle }>()
);

export const updateSuccess = createAction(
    '[Articles] Update Success',
    props<{ responseModel: IArticle }>()
);

export const updateFailure = createAction(
    '[Articles] Update Failure',
    props<{ error: string }>()
);


// Remove
export const remove = createAction(
    '[Articles] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Articles] Remove Success'
);

export const removeFailure = createAction(
    '[Articles] Remove Failure',
    props<{ error: string }>()
);