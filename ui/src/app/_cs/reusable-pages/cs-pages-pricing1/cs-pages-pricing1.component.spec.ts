import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPagesPricing1Component } from './cs-pages-pricing1.component';

describe('CsPagesPricing1Component', () => {
  let component: CsPagesPricing1Component;
  let fixture: ComponentFixture<CsPagesPricing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsPagesPricing1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPagesPricing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
