import { IRole } from 'src/app/features/roles/models/entities/role';

export interface IRoleOverviewState {
    results: IRole[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const IRoleOverviewStateInitialValue: IRoleOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};
