import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsDashboardCardComponent } from './cs-dashboard-card.component';

describe('CsDashboardCardComponent', () => {
  let component: CsDashboardCardComponent;
  let fixture: ComponentFixture<CsDashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsDashboardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
