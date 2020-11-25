import { IArticle } from 'src/app/features/articles/models/entities/article';

export interface IArticleOverviewState {
    results: IArticle[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const IArticleOverviewStateInitialValue: IArticleOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};
