import Fuse from 'fuse.js';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'improve-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T = unknown>
  implements OnInit, OnChanges, OnDestroy
{
  @ContentChild('item', { read: TemplateRef })
  public itemComponent?: TemplateRef<any>;

  @Input()
  public list: T[] = [];

  @Input()
  public searchKeys: string[] = [];

  /**
   * @internal
   */
  public currentList: T[] = [];
  /**
   * @internal
   */
  public form = new FormGroup({
    search: new FormControl(null, Validators.required),
  });

  private fuse?: Fuse<T>;
  private destroy$ = new Subject();

  constructor(private cdr: ChangeDetectorRef) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.onSearch();

      this.cdr.detectChanges();
    });
  }

  /**
   * @internal
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['searchKeys'] && !changes['list']) {
      return;
    }

    this.fuse = new Fuse(this.list, {
      keys: this.searchKeys,
    });
    this.onSearch();
  }

  /**
   * @internal
   */
  public ngOnDestroy(): void {
    this.destroy$.next(undefined);
  }

  /**
   * @internal
   */
  public onSearch(): void {
    if (!this.fuse || !this.form.value.search) {
      this.currentList = [...this.list];
    } else {
      this.currentList =
        this.fuse.search(this.form.value.search).map((result) => result.item) ||
        [];
    }
  }
}
