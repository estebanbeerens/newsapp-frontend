import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthApiService } from 'src/app/auth/services/auth-api.service';
import * as actions from './actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authApiService: AuthApiService,
        private store: Store
    ) { }

    login$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.login),
                switchMap((payload) => {
                    return this.authApiService.authenticate(payload.inputModel)
                        .pipe(
                            map(responseModel => actions.loginSuccess({ responseModel })),
                            catchError(error => of(actions.loginFailure({ error })))
                        );
                })
            );
    });
}