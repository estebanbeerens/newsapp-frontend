import { IArticleStatusOverviewState, IArticleStatusOverviewStateInitialValue } from 'src/app/features/article-statuses/models/state-models/article-status-overview.state';

export interface IArticleStatusState {
    overview: IArticleStatusOverviewState
}

export const IArticleStatusStateInitialValue: IArticleStatusState = {
    overview: IArticleStatusOverviewStateInitialValue
};
