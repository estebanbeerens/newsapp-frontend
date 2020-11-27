import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment as IObject } from 'src/app/features/comments/models/entities/comment';

@Injectable({
    providedIn: 'root',
})
export class CommentApiService {
    
    baseUrl = environment.apiUrl + '/comment';

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