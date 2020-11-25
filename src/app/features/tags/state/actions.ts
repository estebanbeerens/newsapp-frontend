import { createAction, props } from '@ngrx/store';
import { ITag } from 'src/app/features/tags/models/entities/tag';

// Get Overview
export const getOverview = createAction(
    '[Tags] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[Tags] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[Tags] Get Overview Success',
    props<{ responseModel: ITag[] }>()
);

export const getOverviewFailure = createAction(
    '[Tags] Get Overview Failure',
    props<{ error: string }>()
);


// Get Details
export const getDetails = createAction(
    '[Tags] Get Details',
    props<{ id: number }>()
);

export const getDetailsNoChanges = createAction(
    '[Tags] Get Details No Changes'
);

export const getDetailsSuccess = createAction(
    '[Tags] Get Details Success',
    props<{ responseModel: ITag }>()
);

export const getDetailsFailure = createAction(
    '[Tags] Get Details Failure',
    props<{ error: string }>()
);

// Reset Details
export const resetDetails = createAction(
    '[Tags] Reset Details'
);


// Create
export const create = createAction(
    '[Tags] Create',
    props<{ inputModel: ITag }>()
);

export const createSuccess = createAction(
    '[Tags] Create Success',
    props<{ responseModel: ITag }>()
);

export const createFailure = createAction(
    '[Tags] Create Failure',
    props<{ error: string }>()
);


// Update
export const update = createAction(
    '[Tags] Update',
    props<{ id: number, inputModel: ITag }>()
);

export const updateSuccess = createAction(
    '[Tags] Update Success',
    props<{ responseModel: ITag }>()
);

export const updateFailure = createAction(
    '[Tags] Update Failure',
    props<{ error: string }>()
);


// Remove
export const remove = createAction(
    '[Tags] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Tags] Remove Success'
);

export const removeFailure = createAction(
    '[Tags] Remove Failure',
    props<{ error: string }>()
);