import { IComment } from 'src/app/features/comments/models/entities/comment';

export interface ICommentOverviewState {
    results: IComment[],
    articleId: number,
    isLoading: boolean,
    error: string
}

export const ICommentOverviewStateInitialValue: ICommentOverviewState = {
    results: [],
    articleId: 0,
    isLoading: true,
    error: ''
};
