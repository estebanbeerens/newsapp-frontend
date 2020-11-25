import { IArticle, IArticleInitialValue } from 'src/app/features/articles/models/entities/article';

export interface IArticleDetailsState {
    result: IArticle,
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const IArticleDetailsStateInitialValue: IArticleDetailsState = {
    result: IArticleInitialValue,
    requiresReload: true,
    isLoading: false,
    error: ''
};
