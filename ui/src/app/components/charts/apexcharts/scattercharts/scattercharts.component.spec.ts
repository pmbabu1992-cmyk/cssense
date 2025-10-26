import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterchartsComponent } from './scattercharts.component';

describe('ScatterchartsComponent', () => {
  let component: ScatterchartsComponent;
  let fixture: ComponentFixture<ScatterchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ScatterchartsComponent]
});
    fixture = TestBed.createComponent(ScatterchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
