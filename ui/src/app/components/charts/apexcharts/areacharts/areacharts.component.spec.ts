import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachartsComponent } from './areacharts.component';

describe('AreachartsComponent', () => {
  let component: AreachartsComponent;
  let fixture: ComponentFixture<AreachartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AreachartsComponent]
});
    fixture = TestBed.createComponent(AreachartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
