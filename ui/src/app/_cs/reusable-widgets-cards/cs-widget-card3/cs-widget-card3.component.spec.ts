import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard3Component } from './cs-widget-card3.component';

describe('CsWidgetCard3Component', () => {
  let component: CsWidgetCard3Component;
  let fixture: ComponentFixture<CsWidgetCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
