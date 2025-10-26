import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsProductDetailsCardComponent } from './cs-product-details-card.component';

describe('CsProductDetailsCardComponent', () => {
  let component: CsProductDetailsCardComponent;
  let fixture: ComponentFixture<CsProductDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsProductDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsProductDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
