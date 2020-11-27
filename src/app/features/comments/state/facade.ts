import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/features/comments/models/entities/comment';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class CommentFacade {

    constructor(private store: Store) {}

    getIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

    async setArticleId(id: number): Promise<void> {
        await this.store.dispatch(actions.setArticleId({id}));
    }

    getByArticleId(): Observable<IComment[]> {
        this.store.dispatch(actions.getByArticleId());
        return this.store.select(selectors.overviewResults);
    }

    create(inputModel: IComment): void {
        this.store.dispatch(actions.create({inputModel}));
    }

    remove(id: number): void {
        this.store.dispatch(actions.remove({id}));
    }

}