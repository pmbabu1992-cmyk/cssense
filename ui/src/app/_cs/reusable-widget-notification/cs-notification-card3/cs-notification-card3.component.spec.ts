import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNotificationCard3Component } from './cs-notification-card3.component';

describe('CsNotificationCard3Component', () => {
  let component: CsNotificationCard3Component;
  let fixture: ComponentFixture<CsNotificationCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsNotificationCard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsNotificationCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
