import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsProductCardComponent } from './cs-product-card.component';

describe('CsProductCardComponent', () => {
  let component: CsProductCardComponent;
  let fixture: ComponentFixture<CsProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
