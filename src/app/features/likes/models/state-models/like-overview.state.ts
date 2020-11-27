import { ILike } from 'src/app/features/likes/models/entities/like';

export interface ILikeOverviewState {
    results: ILike[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const ILikeOverviewStateInitialValue: ILikeOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};
