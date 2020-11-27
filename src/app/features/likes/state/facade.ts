import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILike } from 'src/app/features/likes/models/entities/like';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class LikeFacade {

    constructor(private store: Store) {}

    getIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

    getByArticleId(id: number): Observable<ILike[]> {
        this.store.dispatch(actions.getByArticleId({ id }));
        return this.store.select(selectors.overviewResults);
    }

    create(inputModel: ILike): void {
        this.store.dispatch(actions.create({inputModel}));
    }

    remove(id: number): void {
        this.store.dispatch(actions.remove({id}));
    }

}