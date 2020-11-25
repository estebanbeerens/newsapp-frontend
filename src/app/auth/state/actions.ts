import { createAction, props } from '@ngrx/store';
import { ICredentials } from 'src/app/auth/models/entities/credentials';
import { IUser } from 'src/app/features/users/models/entities/user';

// Login
export const login = createAction(
    '[Auth] Login',
    props<{ inputModel: ICredentials }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ responseModel: IUser }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);

// Login
export const logout = createAction(
    '[Auth] Logout'
);