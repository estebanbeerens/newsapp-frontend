import { IReviewDetailsState, IReviewDetailsStateInitialValue } from 'src/app/features/reviews/models/state-models/review-details.state';
import { IReviewOverviewState, IReviewOverviewStateStateInitialValue } from 'src/app/features/reviews/models/state-models/review-overview.state';

export interface IReviewState {
    overview: IReviewOverviewState,
    details: IReviewDetailsState
}

export const IReviewStateInitialValue: IReviewState = {
    overview: IReviewOverviewStateStateInitialValue,
    details: IReviewDetailsStateInitialValue
};
