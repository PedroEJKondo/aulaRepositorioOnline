import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public get(path:string, httpParam:HttpParams = new HttpParams()):any{
    return this.http.get(environment.app_url+path,{params:httpParam});
  }
  
  public post(path:string, httpParam:HttpParams = new HttpParams()):any{
    return this.http.post(environment.app_url+path,{params:httpParam});
  }

  public put(path:string, httpParam:HttpParams = new HttpParams()):any{
    return this.http.put(environment.app_url+path,{params:httpParam});
  }
  
  public delete(path:string, httpParam:HttpParams = new HttpParams()):any{
    return this.http.delete(environment.app_url+path,{params:httpParam});
  }
}
