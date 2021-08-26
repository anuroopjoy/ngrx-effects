import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category/category.interfaces';
import { Movie } from './movies/movies.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get('/getCategories') as Observable<Category[]>;
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get('/getMovies') as Observable<Movie[]>;
  }
}
