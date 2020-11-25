import { createReducer, on } from '@ngrx/store';
import { IAuthState, IAuthStateInitialValue } from 'src/app/auth/models/state-models/auth.state';
import { IUserInitialValue } from 'src/app/features/users/models/entities/user';
import * as actions from './actions';

export const authReducer = createReducer<IAuthState>(
    IAuthStateInitialValue,
    
    on(actions.login, (state): IAuthState => {
        return {
            ...state,
            error: '',
            isLoading: true,
        }
    }),
    on(actions.loginSuccess, (state, action): IAuthState => {

        // We store our token in local storage
        localStorage.setItem('newsapp.accessToken', action.responseModel.token);

        return {
            ...state,
            authenticatedUser: action.responseModel,
            error: '',
            isLoading: false,
        }
    }),
    on(actions.loginFailure, (state, action): IAuthState => {
        return {
            ...state,
            authenticatedUser: IUserInitialValue,
            error: action.error,
            isLoading: false,
        }
    }),

    on(actions.logout, (state): IAuthState => {
        return {
            ...state,
            authenticatedUser: IUserInitialValue
        }
    })
)