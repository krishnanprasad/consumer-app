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
@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  constructor(private http: HttpClient) {}
  // public getUsers(): Observable<UserInformation> {
  public getRecipe(recipeid: any): Observable<Recipe> {
    const url = environment.apiUrl + 'Recipe/GetRecipeDetail';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', recipeid);
    return this.http.get<Recipe>(url, { params: queryParams });
  }
  public AddRecipe(recipe: Recipe): Observable<any> {
    var header = new HttpHeaders().set('Content-type', 'application/json');
    const url = environment.apiUrl + 'Recipe/AddRecipe';
    return this.http.post<any>(url, recipe, { headers: header });
  }
  public getRecipeList(chefid: string): Observable<any> {
    if ((chefid == '')) {
      chefid = '';
    }
    const url = environment.apiUrl + 'Recipe/GetRecipeList';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('chef_id', chefid);
    return this.http.get<Recipe[]>(url, { params: queryParams });
  }
  public getRecipeSearchList(searchrecipe: any): Observable<any> {
    var header = new HttpHeaders().set('Content-type', 'application/json');
    const url = environment.apiUrl + 'Recipe/GetSearchRecipeList';
    let queryParams = new HttpParams();

    queryParams = queryParams.append('searchRecipe', searchrecipe);
    return this.http.post<Recipe[]>(url, searchrecipe, {
      headers: header,
    });
  }
}
