import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie Component] GetMovies'),
      mergeMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => ({
            type: '[Data API] GetMovies Success',
            movies,
          })),
          catchError(() => of({ type: '[Data API] GetMovies Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
