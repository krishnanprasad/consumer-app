import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/modal/ingredient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private http: HttpClient) {}
  public getIngredientRecommendedList(): Observable<any> {
    const url = environment.apiUrl + 'Ingredient/GetRecommendedIngredientList';
    return this.http.get<Ingredient[]>(url);
  }
  public getIngredientSearch(searchterm: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('searchterm', searchterm);
    const url = environment.apiUrl + 'Ingredient/GetIngredientListSearch';
    return this.http.get<Ingredient[]>(url, { params: queryParams });
  }
}
