import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://dev-skiller-api.azurewebsites.net/api/Authentication';

  constructor(private http: HttpClient) {}

  register(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/UserRegistration`, payload);
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/UserLogin`, payload);
  }
}
