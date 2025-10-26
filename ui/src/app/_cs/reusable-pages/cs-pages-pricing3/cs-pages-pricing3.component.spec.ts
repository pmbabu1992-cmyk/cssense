import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPagesPricing3Component } from './cs-pages-pricing3.component';

describe('CsPagesPricing3Component', () => {
  let component: CsPagesPricing3Component;
  let fixture: ComponentFixture<CsPagesPricing3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsPagesPricing3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPagesPricing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
