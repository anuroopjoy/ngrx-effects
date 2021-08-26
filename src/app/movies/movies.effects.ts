import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { getMovies, GetMoviesErrorMsg, GetMoviesSuccessMsg } from './movies.actions';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      mergeMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => ({
            type: GetMoviesSuccessMsg,
            movies,
          })),
          catchError(() => of({ type: GetMoviesErrorMsg }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
