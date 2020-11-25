import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICredentials } from 'src/app/auth/models/entities/credentials';
import { IUser } from 'src/app/features/users/models/entities/user';
import * as actions from './actions';
import * as selector from './selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {

    constructor(private store: Store) { }

    getCurrentUser(): Observable<IUser> {
        return this.store.select(selector.authenticatedUser);
    }

    login(inputModel: ICredentials): Observable<IUser> {
        this.store.dispatch(actions.login({inputModel}));
        return this.store.select(selector.authenticatedUser);
    }

    logout(): void {
        this.store.dispatch(actions.logout());
    }
}