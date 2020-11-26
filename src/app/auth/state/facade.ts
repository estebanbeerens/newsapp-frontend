import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICredentials } from 'src/app/auth/models/form-models/credentials';
import { IRegister } from 'src/app/auth/models/form-models/register';
import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';
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

    login(credentials: ICredentials): Observable<IUser> {
        const inputModel: IUser = {
            ...IUserInitialValue,
            username: credentials.username,
            password: credentials.password
        };
        this.store.dispatch(actions.login({inputModel}));
        return this.store.select(selector.authenticatedUser);
    }

    logout(): void {
        this.store.dispatch(actions.logout());
    }

    register(formValue: IRegister): void {
        const inputModel: IUser = {
            ...IUserInitialValue,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            username: formValue.username,
            password: formValue.password,
            email: formValue.email,
            roleID: 1,
            role: null
        }
        this.store.dispatch(actions.register({inputModel}));
    }
}