import { createReducer, on } from '@ngrx/store';
import { IAuthState, IAuthStateInitialValue } from 'src/app/auth/models/state-models/auth.state';
import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';
import * as actions from './actions';

export const authReducer = createReducer<IAuthState>(
    IAuthStateInitialValue,

    on(actions.checkLogin, (state): IAuthState => {

        // We get the user from local storage
        let user: IUser = IUserInitialValue;

        if  (localStorage.getItem('newsapp.user')) {
            user = JSON.parse(localStorage.getItem('newsapp.user'));
        }

        return {
            ...state,
            authenticatedUser: user,
            error: '',
            isLoading: false,
        }
    }),
    
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
        // We store the user in local storage
        localStorage.setItem('newsapp.user', JSON.stringify(action.responseModel));

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

    // Logout
    on(actions.logout, (state): IAuthState => {

        //  We remove the user from local storage
        localStorage.removeItem('newsapp.user');

        return {
            ...state,
            authenticatedUser: IUserInitialValue,
            error: '',
            isLoading: false,
        }
    }),

    // Register
    on(actions.register, (state): IAuthState => {
        return {
            ...state,
            error: '',
            isLoading: true,
        }
    }),
    on(actions.registerSuccess, (state): IAuthState => {
        return {
            ...state,
            error: '',
            isLoading: false,
        }
    }),
    on(actions.registerFailure, (state, action): IAuthState => {
        return {
            ...state,
            error: action.error,
            isLoading: false,
        }
    })
)