import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  categoriesSelector,
  currentCategoryPositionSelector,
} from './categories.selectors';
import { getCategories, setSelectedCategory } from './category.actions';
import { Category } from './category.interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories$!: Observable<Category[]>;
  selectedCategory$!: Observable<number>;

  constructor(private readonly store: Store) {
    this.categories$ = this.store.select(categoriesSelector);
    this.selectedCategory$ = this.store.select(currentCategoryPositionSelector);
  }

  async ngOnInit() {
    this.store.dispatch(getCategories());
  }

  showDetails(index: number) {
    this.store.dispatch(setSelectedCategory({ position: index }));
  }
}
