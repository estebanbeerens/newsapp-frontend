import { IUserDetailsState, IUserDetailsStateInitialValue } from 'src/app/features/users/models/state-models/user-details.state';
import { IUserOverviewState, IUserOverviewStateInitialValue } from 'src/app/features/users/models/state-models/user-overview.state';

export interface IUserState {
    overview: IUserOverviewState,
    details: IUserDetailsState
}

export const IUserStateInitialValue: IUserState = {
    overview: IUserOverviewStateInitialValue,
    details: IUserDetailsStateInitialValue
};
