import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPagesPricing2Component } from './cs-pages-pricing2.component';

describe('CsPagesPricing2Component', () => {
  let component: CsPagesPricing2Component;
  let fixture: ComponentFixture<CsPagesPricing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsPagesPricing2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPagesPricing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
