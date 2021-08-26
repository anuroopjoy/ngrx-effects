import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import {
  getCategories,
  GetCategoriesErrorMsg,
  GetCategoriesSuccessMsg,
} from './category.actions';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategories),
      mergeMap(() =>
        this.dataService.getCategories().pipe(
          map((categories) => ({
            type: GetCategoriesSuccessMsg,
            categories,
          })),
          catchError(() => of({ type: GetCategoriesErrorMsg }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
