import { createAction, props } from '@ngrx/store';
import { Category } from './category.interfaces';

export const GetCategoriesSuccessMsg = '[Data API] GetCategories Success';
export const GetCategoriesErrorMsg = '[Data API] GetCategories Error';

export const getCategories = createAction('[Category Component] GetCategories');
export const getCategoriesSuccess = createAction(
  GetCategoriesSuccessMsg,
  props<{ categories: Category[] }>()
);
export const getCategoriesError = createAction(GetCategoriesErrorMsg);
export const setSelectedCategory = createAction(
  '[Category Component] SetSelectedCategory',
  props<{ position: number }>()
);
