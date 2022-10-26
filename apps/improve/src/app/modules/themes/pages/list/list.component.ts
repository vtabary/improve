import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ThemesService } from '../../../database/public-api';
import { CurrentClassService } from '../../../database/services/current-class/current-class.service';
import { ThemesHelperService } from '../../services/themes-helper/themes-helper.service';

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
  public form = new FormGroup({
    statuses: new FormArray([]),
  });
  /**
   * @internal
   */
  public list: string[] = [];

  constructor(
    private themes: ThemesService,
    private helper: ThemesHelperService,
    private currentClass: CurrentClassService
  ) {}

  public ngOnInit(): void {
    this.list = this.themes.list();

    this.list.forEach((_, index) => {
      this.statuses.insert(
        index,
        new FormControl(this.helper.isUsed(this.currentClass.get(), index))
      );
    });
  }

  public get statuses(): FormArray {
    return this.form.get('statuses') as FormArray;
  }
}
