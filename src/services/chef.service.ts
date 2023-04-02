import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Recipe } from 'src/app/modal/recipe';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chef } from 'src/app/modal/chef';

@Injectable({
  providedIn: 'root',
})
export class ChefService {
  constructor(private http: HttpClient) {}
  public getChefDetail(chefid: any): Observable<Chef> {
    const url = environment.apiUrl + 'Chef/GetChefDetail';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('chefid', chefid);
    return this.http.get<Chef>(url, { params: queryParams });
  }
  public getChefList(chefid: any): Observable<Chef[]> {
    const url = environment.apiUrl + 'Chef/GetChefList';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('chefid', chefid);
    return this.http.get<Chef[]>(url, { params: queryParams });
  }
  public getSearchChefList(searchterm: any): Observable<Chef[]> {
    const url = environment.apiUrl + 'Chef/GetChefSearchList';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('searchterm', searchterm);
    return this.http.get<Chef[]>(url, { params: queryParams });
  }
  
}
