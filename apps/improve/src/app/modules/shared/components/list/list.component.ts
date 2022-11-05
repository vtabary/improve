import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'improve-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T = unknown> {
  @ContentChild('item', { read: TemplateRef })
  public itemComponent?: TemplateRef<any>;

  @Input()
  public list: T[] = [];
}
