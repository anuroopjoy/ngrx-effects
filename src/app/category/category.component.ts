import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import {
  categoriesSelector,
  currentCategorySelector,
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
  selectedCategory$!: Observable<Category>;

  constructor(private dataService: DataService, private readonly store: Store) {
    this.categories$ = this.store.select(categoriesSelector);
    this.selectedCategory$ = this.store.select(currentCategorySelector);
  }

  async ngOnInit() {
    const categories = await this.dataService.getCategories().toPromise();
    this.store.dispatch(getCategories({ categories }));
    if (categories?.length) {
      this.store.dispatch(setSelectedCategory({ position: 0 }));
    }
  }

  showDetails(index: number) {
    this.store.dispatch(setSelectedCategory({ position: index }));
  }
}
