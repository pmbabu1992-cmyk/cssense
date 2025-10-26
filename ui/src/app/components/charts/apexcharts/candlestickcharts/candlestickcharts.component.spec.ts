import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickchartsComponent } from './candlestickcharts.component';

describe('CandlestickchartsComponent', () => {
  let component: CandlestickchartsComponent;
  let fixture: ComponentFixture<CandlestickchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CandlestickchartsComponent]
});
    fixture = TestBed.createComponent(CandlestickchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
