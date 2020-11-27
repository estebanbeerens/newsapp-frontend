import { IComment } from 'src/app/features/comments/models/entities/comment';

export interface ICommentOverviewState {
    results: IComment[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const ICommentOverviewStateInitialValue: ICommentOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};
