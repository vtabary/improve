import { Component, OnInit } from '@angular/core';
import { CategoriesService, ICategory } from '../../../database/public-api';

@Component({
  selector: 'improve-categories-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  /**
   * @internal
   */
  public list: ICategory[] = [];

  constructor(private categories: CategoriesService) {}

  public ngOnInit(): void {
    this.list = this.categories.list();
  }
}
