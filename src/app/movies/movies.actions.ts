import { createAction, props } from '@ngrx/store';

import { Movie } from './movies.interfaces';

export const getMovies = createAction('[Movie Component] GetMovies');
export const getMoviesSuccess = createAction(
  '[Data API] GetMovies Success',
  props<{ movies: Movie[] }>()
);
export const getMoviesError = createAction('[Data API] GetMovies Error');
