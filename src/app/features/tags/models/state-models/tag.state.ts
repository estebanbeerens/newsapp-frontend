import { ITagDetailsState, ITagDetailsStateInitialValue } from 'src/app/features/tags/models/state-models/tag-details.state';
import { ITagOverviewState, ITagOverviewStateInitialValue } from 'src/app/features/tags/models/state-models/tag-overview.state';

export interface ITagState {
    overview: ITagOverviewState,
    details: ITagDetailsState
}

export const ITagStateInitialValue: ITagState = {
    overview: ITagOverviewStateInitialValue,
    details: ITagDetailsStateInitialValue
};
