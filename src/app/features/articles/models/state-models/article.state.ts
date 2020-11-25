import { IArticleDetailsState, IArticleDetailsStateInitialValue } from 'src/app/features/articles/models/state-models/article-details.state';
import { IArticleOverviewState, IArticleOverviewStateInitialValue } from 'src/app/features/articles/models/state-models/article-overview.state';

export interface IArticleState {
    overview: IArticleOverviewState,
    details: IArticleDetailsState
}

export const IArticleStateInitialValue: IArticleState = {
    overview: IArticleOverviewStateInitialValue,
    details: IArticleDetailsStateInitialValue
};
