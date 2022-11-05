import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ThemesService,
  UsedThemesService,
  CurrentClassService,
  ITheme,
} from '../../../database/public-api';

@Component({
  selector: 'improve-themes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  /**
   * @internal
   */
  public list: ITheme[] = [];
  /**
   * @internal
   */
  public used: number[] = [];

  constructor(
    private themes: ThemesService,
    private usedThemes: UsedThemesService,
    private currentClass: CurrentClassService
  ) {}

  public ngOnInit(): void {
    this.list = this.themes.list();

    this.used = this.usedThemes.list(this.currentClass.get());
  }
}
