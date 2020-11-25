import { createAction, props } from '@ngrx/store';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';

// Get Overview
export const getOverview = createAction(
    '[ArticleStatuses] Get Overview'
);

export const getOverviewNoChanges = createAction(
    '[ArticleStatuses] Get Overview No Changes'
);

export const getOverviewSuccess = createAction(
    '[ArticleStatuses] Get Overview Success',
    props<{ responseModel: IArticleStatus[] }>()
);

export const getOverviewFailure = createAction(
    '[ArticleStatuses] Get Overview Failure',
    props<{ error: string }>()
);