import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASU_URL = 'https://apolis-grocery.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(`${this.BASU_URL}/category`)
  }

  getSubCategoryByCatId(catId: any): Observable<any>{
    return this.http.get<any>(`${this.BASU_URL}/subcategory/${catId}`)
  }

  getProductByCatId(catId: any): Observable<any>{
    return this.http.get<any>(`${this.BASU_URL}/products/cat/${catId}`)
  }

  getProductById(id: any): Observable<any>{
    return this.http.get<any>(`${this.BASU_URL}/products/${id}`)
  }

}
