import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public index(path:string, httpParam:HttpParams = new HttpParams()):any{
    return this.http.get(environment.app_url+path,{params:httpParam});
  }
}
