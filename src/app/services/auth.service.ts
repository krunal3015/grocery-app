import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASU_URL = 'https://apolis-grocery.herokuapp.com/api/auth';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    return this.http.post<any>(`${this.BASU_URL + '/register'}`, data);
  }

  login(data: any): Observable<any>{
    return this.http.post<any>(`${this.BASU_URL + '/login'}`, data);
  }

}
