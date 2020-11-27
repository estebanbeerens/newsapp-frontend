import { ILike } from 'src/app/features/likes/models/entities/like';

export interface ILikeOverviewState {
    results: ILike[],
    articleId: number,
    isLoading: boolean,
    error: string
}

export const ILikeOverviewStateInitialValue: ILikeOverviewState = {
    results: [],
    articleId: 0,
    isLoading: true,
    error: ''
};
