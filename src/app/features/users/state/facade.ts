import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/features/users/models/entities/user';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class UserFacade {

    constructor(private store: Store) {}

    getAll(): Observable<IUser[]> {
        this.store.dispatch(actions.getOverview());
        return this.store.select(selectors.overviewResults);
    }

    getOverviewIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

    getDetails(id: number): Observable<IUser> {
        this.store.dispatch(actions.getDetails({id}));
        return this.store.select(selectors.detailsResult);
    }

    getDetailsIsLoading(): Observable<boolean> {
        return this.store.select(selectors.detailsIsLoading);
    }

    create(inputModel: IUser): void {
        this.store.dispatch(actions.create({inputModel}));
    }

    remove(id: number): void {
        this.store.dispatch(actions.remove({id}));
    }

}