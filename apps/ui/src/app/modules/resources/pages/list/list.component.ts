import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DatabaseModule,
  IResource,
  ResourcesService,
} from '../../../database/public-api';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'improve-resources-list',
  standalone: true,
  imports: [CommonModule, SharedModule, DatabaseModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  /**
   * @internal
   */
  public list: IResource[] = [];
  /**
   * @internal
   */
  public used: number[] = [];

  constructor(private resources: ResourcesService) {}

  public ngOnInit(): void {
    this.list = this.resources.list();
  }
}
