import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNotificationCard5Component } from './cs-notification-card5.component';

describe('CsNotificationCard5Component', () => {
  let component: CsNotificationCard5Component;
  let fixture: ComponentFixture<CsNotificationCard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsNotificationCard5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsNotificationCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
