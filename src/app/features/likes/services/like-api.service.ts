import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILike as IObject } from 'src/app/features/likes/models/entities/like';

@Injectable({
    providedIn: 'root',
})
export class LikeApiService {
    
    baseUrl = environment.apiUrl + '/like';

    constructor(private http: HttpClient) { }

    getByArticleId(id: number): Observable<IObject[]> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.get<IObject[]>(requestUrl);
    }
    
    create(inputModel: IObject): Observable<IObject> {
        const requestUrl = `${this.baseUrl}`;
        
        return this.http.post<IObject>(requestUrl, inputModel);
    }

    delete(id: number): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.delete<IObject>(requestUrl);
    }
    
}