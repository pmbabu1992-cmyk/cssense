import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard7Component } from './cs-widget-card7.component';

describe('CsWidgetCard7Component', () => {
  let component: CsWidgetCard7Component;
  let fixture: ComponentFixture<CsWidgetCard7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
