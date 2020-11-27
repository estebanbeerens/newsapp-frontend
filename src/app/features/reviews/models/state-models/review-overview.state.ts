import { IArticleOverviewState, IArticleOverviewStateInitialValue } from 'src/app/features/articles/models/state-models/article-overview.state';

export interface IReviewOverviewState extends IArticleOverviewState {
}

export const IReviewOverviewStateStateInitialValue: IReviewOverviewState = {
    ...IArticleOverviewStateInitialValue
};
