import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { UserApiService } from 'src/app/features/users/services/user-api.service';
import * as actions from './actions';
import * as selectors from './selectors';


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userApiService: UserApiService,
        private store: Store
    ) {}

    getOverview$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.getOverview, actions.removeSuccess),
                withLatestFrom(
                    this.store.pipe(select(selectors.overviewRequiresReload))
                ),
                switchMap(([, requiresReload]) => {
                    if (!requiresReload) {
                        this.store.dispatch(actions.getOverviewNoChanges());
                        return empty();
                    }

                    return this.userApiService.getAll()
                        .pipe(
                            map(response => (actions.getOverviewSuccess({ responseModel: response }))),
                            catchError((error) => of(actions.getOverviewFailure({ error })))
                        )
                }));
    });

    create$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.create),
                switchMap((payload) => {
                    return this.userApiService.create(payload.inputModel)
                        .pipe(
                            map(responseModel => actions.createSuccess({ responseModel })),
                            catchError(error => of(actions.createFailure({ error })))
                        );
                })
            );
    });

    delete$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.remove),
                switchMap((payload) => {
                    return this.userApiService.delete(payload.id)
                        .pipe(
                            map(() => actions.removeSuccess()),
                            catchError(error => of(actions.removeFailure({ error })))
                        );
                })
            );
    });
}