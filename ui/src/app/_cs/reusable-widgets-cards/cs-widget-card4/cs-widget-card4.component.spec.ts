import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard4Component } from './cs-widget-card4.component';

describe('CsWidgetCard4Component', () => {
  let component: CsWidgetCard4Component;
  let fixture: ComponentFixture<CsWidgetCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
