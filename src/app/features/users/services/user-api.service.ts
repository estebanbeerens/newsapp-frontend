import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser as IObject } from 'src/app/features/users/models/entities/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    
    baseUrl = environment.apiUrl + '/user';

    constructor(private http: HttpClient) { }
    
    getAll(): Observable<IObject[]> {

        const requestUrl = `${this.baseUrl}`;

        const token = localStorage.getItem('newsapp.accessToken');

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        })

        return this.http.get<IObject[]>(requestUrl, { headers } );
    }

    create(inputModel: IObject): Observable<IObject> {
        const requestUrl = `${this.baseUrl}`;

        return this.http.post<IObject>(requestUrl, inputModel)
    }

    delete(id: number): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/${id}`;

        return this.http.delete<IObject>(requestUrl);
    }
    
}