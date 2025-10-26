import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard2Component } from './cs-widget-card2.component';

describe('CsWidgetCard2Component', () => {
  let component: CsWidgetCard2Component;
  let fixture: ComponentFixture<CsWidgetCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
