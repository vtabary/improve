import { Component, OnInit } from '@angular/core';
import {
  ArticulationsService,
  CurrentClassService,
  IArticulation,
  UsedArticulationsService,
} from '../../../database/public-api';

@Component({
  selector: 'improve-articulations-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  /**
   * @internal
   */
  public list: IArticulation[] = [];
  /**
   * @internal
   */
  public used: number[] = [];

  constructor(
    private articulations: ArticulationsService,
    private usedArticulations: UsedArticulationsService,
    private currentClass: CurrentClassService
  ) {}

  public ngOnInit(): void {
    this.list = this.articulations.list();
    this.used = this.usedArticulations.list(this.currentClass.get());
  }
}
