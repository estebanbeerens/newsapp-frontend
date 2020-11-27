import { ILikeOverviewState, ILikeOverviewStateInitialValue } from 'src/app/features/likes/models/state-models/like-overview.state';

export interface ILikeState {
    overview: ILikeOverviewState
}

export const ILikeStateInitialValue: ILikeState = {
    overview: ILikeOverviewStateInitialValue
};
