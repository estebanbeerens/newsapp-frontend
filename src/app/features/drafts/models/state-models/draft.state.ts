import { IDraftDetailsState, IDraftDetailsStateInitialValue } from 'src/app/features/drafts/models/state-models/draft-details.state';
import { IDraftOverviewState, IDraftOverviewStateInitialValue } from 'src/app/features/drafts/models/state-models/draft-overview.state';

export interface IDraftState {
    overview: IDraftOverviewState,
    details: IDraftDetailsState
}

export const IDraftStateInitialValue: IDraftState = {
    overview: IDraftOverviewStateInitialValue,
    details: IDraftDetailsStateInitialValue
};
