import { IArticleOverviewState, IArticleOverviewStateInitialValue } from 'src/app/features/articles/models/state-models/article-overview.state';

export interface IDraftOverviewState extends IArticleOverviewState {
}

export const IDraftOverviewStateInitialValue: IDraftOverviewState = {
    ...IArticleOverviewStateInitialValue
};
