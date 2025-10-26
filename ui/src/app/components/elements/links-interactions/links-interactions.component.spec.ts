import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksInteractionsComponent } from './links-interactions.component';

describe('LinksInteractionsComponent', () => {
  let component: LinksInteractionsComponent;
  let fixture: ComponentFixture<LinksInteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksInteractionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
