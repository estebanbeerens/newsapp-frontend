import { IArticleDetailsState, IArticleDetailsStateInitialValue } from 'src/app/features/articles/models/state-models/article-details.state';

export interface IReviewDetailsState extends IArticleDetailsState {
    
}

export const IReviewDetailsStateInitialValue: IReviewDetailsState = {
    ...IArticleDetailsStateInitialValue
};
