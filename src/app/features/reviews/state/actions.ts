import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/features/Articles/models/entities/article';

// Get Overview
export const getOverview = createAction(
    '[Reviews] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[Reviews] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[Reviews] Get Overview Success',
    props<{ responseModel: IArticle[] }>()
);

export const getOverviewFailure = createAction(
    '[Reviews] Get Overview Failure',
    props<{ error: string }>()
);


// Get Details
export const getDetails = createAction(
    '[Reviews] Get Details',
    props<{ id: number }>()
);

export const getDetailsNoChanges = createAction(
    '[Reviews] Get Details No Changes'
);

export const getDetailsSuccess = createAction(
    '[Reviews] Get Details Success',
    props<{ responseModel: IArticle }>()
);

export const getDetailsFailure = createAction(
    '[Reviews] Get Details Failure',
    props<{ error: string }>()
);

// Reset Details
export const resetDetails = createAction(
    '[Reviews] Reset Details'
);


// Update
export const update = createAction(
    '[Reviews] Update',
    props<{ id: number, inputModel: IArticle }>()
);

export const updateSuccess = createAction(
    '[Reviews] Update Success',
    props<{ responseModel: IArticle }>()
);

export const updateFailure = createAction(
    '[Reviews] Update Failure',
    props<{ error: string }>()
);


// Remove
export const remove = createAction(
    '[Reviews] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Reviews] Remove Success'
);

export const removeFailure = createAction(
    '[Reviews] Remove Failure',
    props<{ error: string }>()
);