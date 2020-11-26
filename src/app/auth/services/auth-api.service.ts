import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser as IObject } from 'src/app/features/users/models/entities/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    
    baseUrl = environment.apiUrl + '/user';

    constructor(private http: HttpClient) { }

    register(inputModel: IObject): Observable<IObject> {
        const requestUrl = `${this.baseUrl}`;

        return this.http.post<IObject>(requestUrl, inputModel)
    }
    
    authenticate(inputModel: IObject): Observable<IObject> {
        const requestUrl = `${this.baseUrl}/authenticate`;
        
        return this.http.post<IObject>(requestUrl, inputModel);
    }
    
}