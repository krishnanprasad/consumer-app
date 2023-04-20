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
import { Blog } from 'src/app/modal/blog';
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}
  public getBlogDetail(blogid: any): Observable<Blog> {
    const url = environment.apiUrl + 'Blog/GetBlogDetail';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('blogid', blogid);
    return this.http.get<Blog>(url, { params: queryParams });
  }
  public getBlogList(): Observable<Blog[]> {
    const url = environment.apiUrl + 'Blog/GetBlogList';
    return this.http.get<Blog[]>(url);
  }
  public getTrendingBlogList(): Observable<Blog[]> {
    const url = environment.apiUrl + 'Blog/GetTrendingBlogList';
    return this.http.get<Blog[]>(url);
  }
}
