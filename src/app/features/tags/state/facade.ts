import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITag, ITagInitialValue } from 'src/app/features/tags/models/entities/tag';
import { ITagForm } from 'src/app/features/tags/models/form-models/tag-form';
import * as actions from './actions';
import * as selectors from './selectors';

@Injectable({
    providedIn: 'root',
})
export class TagFacade {

    constructor(private store: Store) {}

    getAll(): Observable<ITag[]> {
        this.store.dispatch(actions.getOverview());
        return this.store.select(selectors.overviewResults);
    }

    getOverviewIsLoading(): Observable<boolean> {
        return this.store.select(selectors.overviewIsLoading);
    }

    getDetailsIsLoading(): Observable<boolean> {
        return this.store.select(selectors.detailsIsLoading);
    }

    getById(id: number): Observable<ITag> {
        if(id === 0)
        {
            this.store.dispatch(actions.resetDetails());
        }
        else
        {
            this.store.dispatch(actions.getDetails({ id }));
            return this.store.select(selectors.detailsResult);
        }
    }

    getDetails(): Observable<ITag> {
        return this.store.select(selectors.detailsResult);
    }

    create(formOutput: ITagForm): void {
        const inputModel: ITag = {
            ...ITagInitialValue,
            name: formOutput.name
        }
        this.store.dispatch(actions.create({inputModel}));
    }

    update(id: number, formOutput: ITagForm): void {
        const inputModel: ITag = {
            ...ITagInitialValue,
            name: formOutput.name,
            tagID: id
        }
        this.store.dispatch(actions.update({id , inputModel}));
    }

    remove(id: number): void {
        this.store.dispatch(actions.remove({id}));
    }

}