import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLandingCard2Component } from './cs-landing-card2.component';

describe('CsLandingCard2Component', () => {
  let component: CsLandingCard2Component;
  let fixture: ComponentFixture<CsLandingCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsLandingCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsLandingCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
