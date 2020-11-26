import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/features/users/models/entities/user';

// Get Overview
export const getOverview = createAction(
    '[Users] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[Users] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[Users] Get Overview Success',
    props<{ responseModel: IUser[] }>()
);

export const getOverviewFailure = createAction(
    '[Users] Get Overview Failure',
    props<{ error: string }>()
);


// Create
export const create = createAction(
    '[Users] Create',
    props<{ inputModel: IUser }>()
);

export const createSuccess = createAction(
    '[Users] Create Success',
    props<{ responseModel: IUser }>()
);

export const createFailure = createAction(
    '[Users] Create Failure',
    props<{ error: string }>()
);


// Remove
export const remove = createAction(
    '[Users] Remove',
    props<{ id: number }>()
);

export const removeSuccess = createAction(
    '[Users] Remove Success'
);

export const removeFailure = createAction(
    '[Users] Remove Failure',
    props<{ error: string }>()
);