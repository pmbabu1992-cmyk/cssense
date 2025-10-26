import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLandingCard1Component } from './cs-landing-card1.component';

describe('CsLandingCard1Component', () => {
  let component: CsLandingCard1Component;
  let fixture: ComponentFixture<CsLandingCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsLandingCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsLandingCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
