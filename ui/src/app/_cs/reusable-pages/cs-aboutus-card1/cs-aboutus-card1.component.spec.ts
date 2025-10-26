import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAboutusCard1Component } from './cs-aboutus-card1.component';

describe('CsAboutusCard1Component', () => {
  let component: CsAboutusCard1Component;
  let fixture: ComponentFixture<CsAboutusCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsAboutusCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsAboutusCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
