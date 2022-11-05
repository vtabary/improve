import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'improve-themes-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
