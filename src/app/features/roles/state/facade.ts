import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRole } from 'src/app/features/roles/models/entities/role';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class RoleFacade {

    constructor(private store: Store) {}

    getOverviewResults(): Observable<IRole[]> {
        this.store.dispatch(actions.getOverview());
        return this.store.select(selectors.overviewResults);
    }

    getOverviewIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

}