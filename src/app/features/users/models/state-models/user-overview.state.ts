import { IUser } from 'src/app/features/users/models/entities/user';

export interface IUserOverviewState {
    results: IUser[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const IUserOverviewStateInitialValue: IUserOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};
