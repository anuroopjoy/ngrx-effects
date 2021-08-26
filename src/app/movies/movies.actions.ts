import { createAction, props } from '@ngrx/store';

import { Movie } from './movies.interfaces';

export const GetMoviesSuccessMsg = '[Data API] GetMovies Success';
export const GetMoviesErrorMsg = '[Data API] GetMovies Error';

export const getMovies = createAction('[Movie Component] GetMovies');
export const getMoviesSuccess = createAction(
  GetMoviesSuccessMsg,
  props<{ movies: Movie[] }>()
);
export const getMoviesError = createAction(GetMoviesErrorMsg);
