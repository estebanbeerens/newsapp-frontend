import { ICommentOverviewState, ICommentOverviewStateInitialValue } from 'src/app/features/comments/models/state-models/comment-overview.state';

export interface ICommentState {
    overview: ICommentOverviewState
}

export const ICommentStateInitialValue: ICommentState = {
    overview: ICommentOverviewStateInitialValue
};
