import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { LikeApiService } from 'src/app/features/likes/services/like-api.service';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable()
export class LikeEffects {
    constructor(
        private actions$: Actions,
        private likeApiService: LikeApiService,
        private store: Store
    ) {}

    getLikes$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.getByArticleId),
                withLatestFrom(
                    this.store.pipe(select(selectors.overviewRequiresReload))
                ),
                switchMap(([payload, requiresReload]) => {
                    if (!requiresReload) {
                        this.store.dispatch(actions.getByArticleIdNoChanges());
                        return empty();
                    }

                    return this.likeApiService.getByArticleId(payload.id)
                        .pipe(
                            map(responseModel => (actions.getByArticleIdSuccess({ responseModel }))),
                            catchError((error) => of(actions.getByArticleIdFailure({ error })))
                        )
                }));
    });

    create$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(actions.create),
                switchMap((payload) => {
                    return this.likeApiService.create(payload.inputModel)
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
                    return this.likeApiService.delete(payload.id)
                        .pipe(
                            map(() => actions.removeSuccess()),
                            catchError(error => of(actions.removeFailure({ error })))
                        );
                })
            );
    });
    
}