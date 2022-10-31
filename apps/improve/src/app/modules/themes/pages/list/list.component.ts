import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemesService, UsedThemesService } from '../../../database/public-api';
import { CurrentClassService } from '../../../database/services/current-class/current-class.service';

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
  public list: string[] = [];
  /**
   * @internal
   */
  public used: number[] = [];

  constructor(
    private themes: ThemesService,
    private usedThemes: UsedThemesService,
    private currentClass: CurrentClassService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.list = this.themes.list();

    this.used = this.usedThemes.list(this.currentClass.get());
  }
}
