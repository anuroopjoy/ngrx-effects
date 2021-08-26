import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getMovies } from './movies.actions';
import { Movie } from './movies.interfaces';
import { filteredMovieSelector } from './movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<Movie[][]>;

  constructor(private store: Store) {
    this.movies$ = this.store.pipe(filteredMovieSelector);
  }

  async ngOnInit() {
    this.store.dispatch(getMovies());
  }
}
