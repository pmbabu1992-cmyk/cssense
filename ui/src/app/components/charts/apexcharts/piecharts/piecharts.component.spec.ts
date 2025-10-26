import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartsComponent } from './piecharts.component';

describe('PiechartsComponent', () => {
  let component: PiechartsComponent;
  let fixture: ComponentFixture<PiechartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PiechartsComponent]
});
    fixture = TestBed.createComponent(PiechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
