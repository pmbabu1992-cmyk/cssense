import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHtabsComponent } from './dashboard-htabs.component';

describe('DashboardHtabsComponent', () => {
  let component: DashboardHtabsComponent;
  let fixture: ComponentFixture<DashboardHtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHtabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
