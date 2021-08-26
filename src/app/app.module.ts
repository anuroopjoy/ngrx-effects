import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { moviesReducer } from './movies/movies.reducers';
import { CategoryComponent } from './category/category.component';
import { ContainerComponent } from './container/container.component';
import { categoryReducer } from './category/category.reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './category/category.effects';
import { MoviesEffects } from './movies/movies.effects';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CategoryComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    ),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    EffectsModule.forRoot([CategoryEffects, MoviesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
