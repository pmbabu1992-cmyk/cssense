import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinechartsComponent } from './timelinecharts.component';

describe('TimelinechartsComponent', () => {
  let component: TimelinechartsComponent;
  let fixture: ComponentFixture<TimelinechartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TimelinechartsComponent]
});
    fixture = TestBed.createComponent(TimelinechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
