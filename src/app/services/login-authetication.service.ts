import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServiceConfig } from './base-service-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAutheticationService extends BaseServiceConfig {

  constructor(private http:HttpClient) {
    super();
   }

  Login(loginparam:{}): Observable<any>{
    return this.http.post<any>(this.baseURL+'api/login',loginparam);
  }

}
