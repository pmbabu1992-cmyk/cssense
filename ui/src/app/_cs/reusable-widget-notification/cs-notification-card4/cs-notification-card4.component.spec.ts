import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNotificationCard4Component } from './cs-notification-card4.component';

describe('CsNotificationCard4Component', () => {
  let component: CsNotificationCard4Component;
  let fixture: ComponentFixture<CsNotificationCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsNotificationCard4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsNotificationCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
