import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithButtonsComponent } from './layout-with-buttons.component';

describe('LayoutWithButtonsComponent', () => {
  let component: LayoutWithButtonsComponent;
  let fixture: ComponentFixture<LayoutWithButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWithButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
