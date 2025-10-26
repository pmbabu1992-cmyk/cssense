import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsWishlistCardComponent } from './cs-wishlist-card.component';

describe('CsWishlistCardComponent', () => {
  let component: CsWishlistCardComponent;
  let fixture: ComponentFixture<CsWishlistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsWishlistCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsWishlistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
