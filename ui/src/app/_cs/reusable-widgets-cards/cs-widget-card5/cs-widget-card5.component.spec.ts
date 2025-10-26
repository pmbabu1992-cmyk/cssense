import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard5Component } from './cs-widget-card5.component';

describe('CsWidgetCard5Component', () => {
  let component: CsWidgetCard5Component;
  let fixture: ComponentFixture<CsWidgetCard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
