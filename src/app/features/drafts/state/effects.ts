import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { ArticleApiService } from 'src/app/features/articles/services/article-api.service';
import * as actions from './actions';
import * as selectors from './selectors';


@Injectable()
export class DraftEffects {
    constructor(
        private actions$: Actions,
        private articleApiService: ArticleApiService,
        private store: Store
    ) {}

    getOverview$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.getOverview, actions.createSuccess, actions.updateSuccess, actions.removeSuccess),
                switchMap(() => {
                    return this.articleApiService.getAll()
                        .pipe(
                            map(response => (actions.getOverviewSuccess({ responseModel: response }))),
                            catchError((error) => of(actions.getOverviewFailure({ error })))
                        )
                }));
    });

    getDetails$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.getDetails),
                withLatestFrom(
                    this.store.pipe(select(selectors.detailsRequiresReload))
                ),
                switchMap(([payload, requiresReload]) => {
                    if (!requiresReload) {
                        this.store.dispatch(actions.getDetailsNoChanges());
                        return empty();
                    }

                    return this.articleApiService.getById(payload.id)
                        .pipe(
                            map(response => (actions.getDetailsSuccess({ responseModel: response }))),
                            catchError((error) => of(actions.getDetailsFailure({ error })))
                        )
                }));
    });

    create$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.create),
                switchMap((payload) => {
                    return this.articleApiService.create(payload.inputModel)
                        .pipe(
                            map(responseModel => actions.createSuccess({ responseModel })),
                            catchError(error => of(actions.createFailure({ error })))
                        );
                })
            );
    });

    update$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.update),
                switchMap((payload) => {
                    return this.articleApiService.update(payload.id, payload.inputModel)
                        .pipe(
                            map(responseModel => actions.updateSuccess({ responseModel })),
                            catchError(error => of(actions.updateFailure({ error })))
                        );
                })
            );
    });

    delete$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.remove),
                switchMap((payload) => {
                    return this.articleApiService.delete(payload.id)
                        .pipe(
                            map(() => actions.removeSuccess()),
                            catchError(error => of(actions.removeFailure({ error })))
                        );
                })
            );
    });
}