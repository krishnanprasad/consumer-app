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
import { credentials } from 'src/app/modal/credentials';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}
  public CreateChefAccount(createchef: credentials): Observable<any> {
    var header = new HttpHeaders().set('Content-type', 'application/json');
    const url = environment.apiUrl + 'Chef/CreateChef';
    return this.http.post<any>(url, createchef, { headers: header });
  }
}
