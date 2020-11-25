import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';

export interface IAuthState {
    authenticatedUser: IUser;
    isLoading: boolean;
    error: string;
}

export const IAuthStateInitialValue: IAuthState = {
    authenticatedUser: IUserInitialValue,
    isLoading: true,
    error: ''
};
