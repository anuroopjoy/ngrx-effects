import { createAction, props } from '@ngrx/store';
import { Category } from './category.interfaces';

export const getCategories = createAction('[Category Component] GetCategories');
export const getCategoriesSuccess = createAction(
  '[Data API] GetCategories Success',
  props<{ categories: Category[] }>()
);
export const getCategoriesError = createAction(
  '[Data API] GetCategories Error'
);
export const setSelectedCategory = createAction(
  '[Category Component] SetSelectedCategory',
  props<{ position: number }>()
);
