import { Component, OnInit } from '@angular/core';
import { EmotionsService, IEmotion } from '../../../database/public-api';

@Component({
  selector: 'improve-emotions-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  /**
   * @internal
   */
  public list: IEmotion[] = [];

  constructor(private emotions: EmotionsService) {}

  public ngOnInit(): void {
    this.list = this.emotions.list();
  }
}
