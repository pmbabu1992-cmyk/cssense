import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeareachartsComponent } from './rangeareacharts.component';

describe('RangeareachartsComponent', () => {
  let component: RangeareachartsComponent;
  let fixture: ComponentFixture<RangeareachartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RangeareachartsComponent]
});
    fixture = TestBed.createComponent(RangeareachartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
