import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ClassesService,
  CurrentClassService,
} from '../../modules/database/public-api';

@Component({
  selector: 'improve-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.scss'],
})
export class ClassSelectorComponent {
  /**
   * @internal
   */
  public form = new FormGroup({
    label: new FormControl<string>(this.currentClassService.get()),
  });
  /**
   * @internal
   */
  public classes: string[] = [];
  /**
   * @internal
   */
  public currentClass?: string;

  constructor(
    classDb: ClassesService,
    private currentClassService: CurrentClassService
  ) {
    this.classes = classDb.list();
    this.currentClass = currentClassService.get();
  }

  public onSubmit(): void {
    this.onChange();
  }

  public onChange(): void {
    this.currentClassService.set(this.form.value.label);
    this.currentClass = this.currentClassService.get();
    location.reload();
  }
}
