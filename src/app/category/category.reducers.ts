import { createReducer, on } from '@ngrx/store';

import { getCategoriesSuccess, setSelectedCategory } from './category.actions';
import { Category } from './category.interfaces';

export interface CategoryState {
  allCategories: Category[];
  selectedCategoryPosition: number;
}

export const initialState: CategoryState = {
  allCategories: [],
  selectedCategoryPosition: 0,
};

export const categoryReducer = createReducer(
  initialState,
  on(getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    allCategories: categories,
  })),
  on(setSelectedCategory, (state, { position }) => {
    return {
      ...state,
      selectedCategoryPosition: position,
    };
  })
);
