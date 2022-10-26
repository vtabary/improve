import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ClassesService } from '../../../database/public-api';

const labelMustBeUnique = (labels: string[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return labels.some(
      (label) =>
        label
          .toUpperCase()
          .localeCompare((control.value || '').toUpperCase()) === 0
    )
      ? {
          labelMustBeUnique: { message: 'Label is already used' },
        }
      : null;
  };
};

@Component({
  selector: 'improve-classes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  /**
   * @internal
   */
  public form = new FormGroup({
    label: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      labelMustBeUnique(this.classes.list()),
    ]),
  });

  constructor(private classes: ClassesService) {}

  public onSubmit(): void {
    console.log(this.form.errors, this.form.valid);
    if (!this.form.valid) {
      return;
    }

    this.classes.add(this.form.value.label);
  }
}
