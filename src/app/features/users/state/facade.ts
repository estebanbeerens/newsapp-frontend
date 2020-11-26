import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRegister } from 'src/app/auth/models/form-models/register';
import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';
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

    create(formValue: IRegister): Observable<IUser> {
        const inputModel: IUser = {
            ...IUserInitialValue,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            username: formValue.username,
            password: formValue.password,
            email: formValue.email
        }
        this.store.dispatch(actions.create({inputModel}));
        return this.store.select(selectors.detailsResult);
    }

    remove(id: number): void {
        this.store.dispatch(actions.remove({id}));
    }

}