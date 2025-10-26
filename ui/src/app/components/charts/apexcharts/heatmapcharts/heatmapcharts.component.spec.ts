import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapchartsComponent } from './heatmapcharts.component';

describe('HeatmapchartsComponent', () => {
  let component: HeatmapchartsComponent;
  let fixture: ComponentFixture<HeatmapchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HeatmapchartsComponent]
});
    fixture = TestBed.createComponent(HeatmapchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
