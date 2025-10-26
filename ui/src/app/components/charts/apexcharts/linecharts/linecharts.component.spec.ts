import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartsComponent } from './linecharts.component';

describe('LinechartsComponent', () => {
  let component: LinechartsComponent;
  let fixture: ComponentFixture<LinechartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [LinechartsComponent]
});
    fixture = TestBed.createComponent(LinechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
