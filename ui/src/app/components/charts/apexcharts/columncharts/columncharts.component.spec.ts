import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnchartsComponent } from './columncharts.component';

describe('ColumnchartsComponent', () => {
  let component: ColumnchartsComponent;
  let fixture: ComponentFixture<ColumnchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ColumnchartsComponent]
});
    fixture = TestBed.createComponent(ColumnchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
