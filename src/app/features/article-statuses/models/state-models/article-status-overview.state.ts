import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';

export interface IArticleStatusOverviewState {
    results: IArticleStatus[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const IArticleStatusOverviewStateInitialValue: IArticleStatusOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};
