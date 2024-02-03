import { Component, Input } from '@angular/core';

@Component({
  selector: 'improve-feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss'],
})
export class FeatherIconComponent {
  @Input()
  public icon?: string;
}
