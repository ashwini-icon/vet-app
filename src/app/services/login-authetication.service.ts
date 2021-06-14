import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAutheticationService {

  constructor(private http:HttpClient) { }

  Login(loginparam:{}): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:6013/vet_app/api/login',loginparam);
  }

}
