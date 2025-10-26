import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNotificationCard2Component } from './cs-notification-card2.component';

describe('CsNotificationCard2Component', () => {
  let component: CsNotificationCard2Component;
  let fixture: ComponentFixture<CsNotificationCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsNotificationCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsNotificationCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
