import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotchartsComponent } from './boxplotcharts.component';

describe('BoxplotchartsComponent', () => {
  let component: BoxplotchartsComponent;
  let fixture: ComponentFixture<BoxplotchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [BoxplotchartsComponent]
});
    fixture = TestBed.createComponent(BoxplotchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
