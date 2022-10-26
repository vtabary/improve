import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassesService } from '../../modules/database/public-api';
import { CurrentClassService } from '../../modules/database/services/current-class/current-class.service';

@Component({
  selector: 'improve-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.css'],
})
export class ClassSelectorComponent {
  /**
   * @internal
   */
  public form = new FormGroup({
    label: new FormControl(this.currentClassService.get()),
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
  }

  public onSubmit(): void {
    this.onChange();
  }

  public onChange(): void {
    this.currentClassService.set(this.form.value.label);
    location.reload();
  }
}
