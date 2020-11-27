import { IArticleDetailsState, IArticleDetailsStateInitialValue } from 'src/app/features/articles/models/state-models/article-details.state';

export interface IDraftDetailsState extends IArticleDetailsState {
    
}

export const IDraftDetailsStateInitialValue: IDraftDetailsState = {
    ...IArticleDetailsStateInitialValue
};
