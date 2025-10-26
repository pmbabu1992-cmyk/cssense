import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMasksComponent } from './input-masks.component';

describe('InputMasksComponent', () => {
  let component: InputMasksComponent;
  let fixture: ComponentFixture<InputMasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [InputMasksComponent]
});
    fixture = TestBed.createComponent(InputMasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
