import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';

export interface IUserDetailsState {
    result: IUser,
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const IUserDetailsStateInitialValue: IUserDetailsState = {
    result: IUserInitialValue,
    requiresReload: true,
    isLoading: false,
    error: ''
};
