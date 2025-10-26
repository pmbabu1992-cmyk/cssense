import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsProductDetailsCard1Component } from './cs-product-details-card1.component';

describe('CsProductDetailsCard1Component', () => {
  let component: CsProductDetailsCard1Component;
  let fixture: ComponentFixture<CsProductDetailsCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsProductDetailsCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsProductDetailsCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
