import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Category Component] GetCategories'),
      mergeMap(() =>
        this.dataService.getCategories().pipe(
          map((categories) => ({
            type: '[Data API] GetCategories Success',
            categories,
          })),
          catchError(() => of({ type: '[Data API] GetCategories Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
