import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNotificationCard1Component } from './cs-notification-card1.component';

describe('CsNotificationCard1Component', () => {
  let component: CsNotificationCard1Component;
  let fixture: ComponentFixture<CsNotificationCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsNotificationCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsNotificationCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
