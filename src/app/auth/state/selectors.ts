import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from 'src/app/auth/models/state-models/auth.state';

export const getAuthFeatureState = createFeatureSelector<IAuthState>('auth');

// Authenticated User
export const authenticatedUser = createSelector(
    getAuthFeatureState,
    (state) => state.authenticatedUser
);

export const authenticatedUserIsLoading = createSelector(
    getAuthFeatureState,
    (state) => state.isLoading
);

export const authenticatedUserError = createSelector(
    getAuthFeatureState,
    (state) => state.error
);