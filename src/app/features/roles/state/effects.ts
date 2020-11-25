import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { RoleApiService } from 'src/app/features/roles/services/role-api.service';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable()
export class RoleEffects {
    constructor(
        private actions$: Actions,
        private roleApiService: RoleApiService,
        private store: Store
    ) {}

    getOverview$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.getOverview),
                withLatestFrom(
                    this.store.pipe(select(selectors.overviewRequiresReload))
                ),
                switchMap(([, requiresReload]) => {
                    if (!requiresReload) {
                        this.store.dispatch(actions.getOverviewNoChanges());
                        return empty();
                    }

                    return this.roleApiService.getAll()
                        .pipe(
                            map(response => (actions.getOverviewSuccess({ responseModel: response }))),
                            catchError((error) => of(actions.getOverviewFailure({ error })))
                        )
                }));
    });
    
}