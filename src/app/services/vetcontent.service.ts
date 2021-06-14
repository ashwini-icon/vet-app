import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VetcontentService {

  constructor(private http:HttpClient) { }

  AddContent(param :{}):Observable <any>{
    return this.http.post<any>('http://127.0.0.1:6013/vet_app/api/addcontent',param);
  }
  AddSubContent(param :{}):Observable <any>{
    return this.http.post<any>('http://127.0.0.1:6013/vet_app/api/addsubcontent',param);
  }
  getAllChapter():Observable <any>{
    return this.http.get<any>('http://127.0.0.1:6013/vet_app/api/getchapterlist');
  }
}
