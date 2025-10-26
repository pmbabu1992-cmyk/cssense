import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard1Component } from './cs-widget-card1.component';

describe('CsWidgetCard1Component', () => {
  let component: CsWidgetCard1Component;
  let fixture: ComponentFixture<CsWidgetCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
