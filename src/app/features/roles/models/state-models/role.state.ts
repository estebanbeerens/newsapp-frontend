import { IRoleOverviewState, IRoleOverviewStateInitialValue } from 'src/app/features/roles/models/state-models/role-overview.state';

export interface IRoleState {
    overview: IRoleOverviewState
}

export const IRoleStateInitialValue: IRoleState = {
    overview: IRoleOverviewStateInitialValue 
};
