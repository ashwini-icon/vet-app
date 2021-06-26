import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServiceConfig } from './base-service-config.service';

@Injectable({
  providedIn: 'root'
})
export class VetcontentService extends BaseServiceConfig{

  constructor(private http:HttpClient) {
    super();
  }

  AddContent(param :{}):Observable <any>{
    return this.http.post<any>(this.baseURL+'api/addcontent',param);
  }
  AddSubContent(param :{}):Observable <any>{
    return this.http.post<any>(this.baseURL+'api/addsubcontent',param);
  }
  AddMainContent(param :{}):Observable <any>{
    return this.http.post<any>(this.baseURL+'api/addmaincontent',param);
  }
  getAllChapters():Observable <any>{
    return this.http.get<any>(this.baseURL+'api/getAllChapters');
  }
  getAllSections():Observable <any>{
    return this.http.get<any>(this.baseURL+'api/getAllSections');
  }
  getAllContents():Observable <any>{
    return this.http.get<any>(this.baseURL+'api/getAllContent');
  }
}
