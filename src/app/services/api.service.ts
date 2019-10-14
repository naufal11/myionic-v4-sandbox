import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URI = 'https://app1.suntorygaruda.id:900/api/AvoRest/';

  constructor(
    private http: HttpClient
  ) { }

  public getUrl(type: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json, text/plain, */*'
      })
    };
    const REQUEST_URI = encodeURI(this.API_URI + type);

    return this.http.get(REQUEST_URI, httpOptions);
  }

  public getPostData(data: string, type: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json, text/plain, */*'
      })
    };
    const REQUEST_URI = encodeURI(this.API_URI + type + data);

    return this.http.get(REQUEST_URI, httpOptions);
  }
}
