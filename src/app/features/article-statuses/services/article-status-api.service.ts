import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleStatus as IObject } from 'src/app/features/article-statuses/models/entities/article-status';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ArticleStatusApiService {
    
    baseUrl = environment.apiUrl + '/articleStatus';

    constructor(private http: HttpClient) { }
    
    getAll(): Observable<IObject[]> {
        const requestUrl = `${this.baseUrl}`;

        return this.http.get<IObject[]>(requestUrl);
    }

    getById(id: number): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.get<IObject>(requestUrl);
    }
    
}