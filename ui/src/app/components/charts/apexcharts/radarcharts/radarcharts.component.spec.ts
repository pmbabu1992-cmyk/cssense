import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarchartsComponent } from './radarcharts.component';

describe('RadarchartsComponent', () => {
  let component: RadarchartsComponent;
  let fixture: ComponentFixture<RadarchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RadarchartsComponent]
});
    fixture = TestBed.createComponent(RadarchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
