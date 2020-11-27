import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class ReviewFacade {

    constructor(private store: Store) {}

    getAll(): Observable<IArticle[]> {
        this.store.dispatch(actions.getOverview());
        return this.store.select(selectors.overviewResults);
    }

    getOverviewIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

    getDetails(): Observable<IArticle> {
        return this.store.select(selectors.detailsResult);
    }

    getDetailsIsLoading(): Observable<boolean> {
        return this.store.select(selectors.detailsIsLoading);
    }

    getById(id: number): Observable<IArticle> {
        if(id === 0)
        {
            this.store.dispatch(actions.resetDetails());
        }
        else
        {
            this.store.dispatch(actions.getDetails({ id }));
            return this.store.select(selectors.detailsResult);
        }
    }

    update(id: number, inputModel: IArticle): void {
        this.store.dispatch(actions.update({id , inputModel}));
    }

    remove(id: number): void {
        this.store.dispatch(actions.remove({id}));
    }

}