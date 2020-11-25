import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITag as IObject } from 'src/app/features/tags/models/entities/tag';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TagApiService {
    
    baseUrl = environment.apiUrl + '/tag';

    constructor(private http: HttpClient) { }
    
    getAll(): Observable<IObject[]> {
        const requestUrl = `${this.baseUrl}`;

        return this.http.get<IObject[]>(requestUrl);
    }
    
    create(inputModel: IObject): Observable<IObject> {
        const requestUrl = `${this.baseUrl}`;
        
        return this.http.post<IObject>(requestUrl, inputModel);
    }

    getById(id: number): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.get<IObject>(requestUrl);
    }

    update(id: number, inputModel: IObject): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.put<IObject>(requestUrl, inputModel);
    }

    delete(id: number): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.delete<IObject>(requestUrl);
    }
    
}