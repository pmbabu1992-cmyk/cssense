import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWidgetCard6Component } from './cs-widget-card6.component';

describe('CsWidgetCard6Component', () => {
  let component: CsWidgetCard6Component;
  let fixture: ComponentFixture<CsWidgetCard6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWidgetCard6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWidgetCard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
