import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categories } from '../app.interface';
import { CategoryState } from './category.reducers';

export const selectCategories =
  createFeatureSelector<CategoryState>(categories);

export const categoriesSelector = createSelector(
  selectCategories,
  (state: CategoryState) => state.allCategories
);

export const currentCategoryPositionSelector = createSelector(
  selectCategories,
  (state: CategoryState) => state.selectedCategoryPosition
);
