import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartsComponent } from './barcharts.component';

describe('BarchartsComponent', () => {
  let component: BarchartsComponent;
  let fixture: ComponentFixture<BarchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [BarchartsComponent]
});
    fixture = TestBed.createComponent(BarchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
