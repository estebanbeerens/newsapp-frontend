import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class ArticleStatusFacade {

    constructor(private store: Store) {}

    getAll(): Observable<IArticleStatus[]> {
        this.store.dispatch(actions.getOverview());
        return this.store.select(selectors.overviewResults);
    }

    getOverviewIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

}