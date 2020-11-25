import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole as IObject } from 'src/app/features/roles/models/entities/role';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RoleApiService {
    
    baseUrl = environment.apiUrl + '/role';

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