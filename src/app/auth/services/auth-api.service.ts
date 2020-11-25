import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredentials } from 'src/app/auth/models/entities/credentials';
import { IUser } from 'src/app/features/users/models/entities/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {
    
    baseUrl = environment.apiUrl + '/user';

    constructor(private http: HttpClient) { }
    
    authenticate(inputModel: ICredentials): Observable<IUser> {
        const requestUrl = `${this.baseUrl}/authenticate`;
        
        return this.http.post<IUser>(requestUrl, inputModel);
    }
    
}