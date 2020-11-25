import { createAction, props } from '@ngrx/store';
import { IRole } from 'src/app/features/roles/models/entities/role';

// Get Overview
export const getOverview = createAction(
    '[Roles] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[Roles] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[Roles] Get Overview Success',
    props<{ responseModel: IRole[] }>()
);

export const getOverviewFailure = createAction(
    '[Roles] Get Overview Failure',
    props<{ error: string }>()
);