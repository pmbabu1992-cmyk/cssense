import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarareachartsComponent } from './polarareacharts.component';

describe('PolarareachartsComponent', () => {
  let component: PolarareachartsComponent;
  let fixture: ComponentFixture<PolarareachartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PolarareachartsComponent]
});
    fixture = TestBed.createComponent(PolarareachartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
