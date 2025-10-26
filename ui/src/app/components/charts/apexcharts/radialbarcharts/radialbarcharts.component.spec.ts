import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarchartsComponent } from './radialbarcharts.component';

describe('RadialbarchartsComponent', () => {
  let component: RadialbarchartsComponent;
  let fixture: ComponentFixture<RadialbarchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RadialbarchartsComponent]
});
    fixture = TestBed.createComponent(RadialbarchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
