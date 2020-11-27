import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/features/users/models/entities/user';

// Check login
export const checkLogin = createAction(
    '[Auth] Check Login',
);


// Login
export const login = createAction(
    '[Auth] Login',
    props<{ inputModel: IUser }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ responseModel: IUser }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);


// Logout
export const logout = createAction(
    '[Auth] Logout'
);


// Register
export const register = createAction(
    '[Auth] Register',
    props<{ inputModel: IUser }>()
);

export const registerSuccess = createAction(
    '[Auth] Register Success',
    props<{ responseModel: IUser }>()
);

export const registerFailure = createAction(
    '[Auth] Register Failure',
    props<{ error: string }>()
);