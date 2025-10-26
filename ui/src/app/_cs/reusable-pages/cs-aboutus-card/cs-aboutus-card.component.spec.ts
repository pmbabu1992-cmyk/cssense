import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAboutusCardComponent } from './cs-aboutus-card.component';

describe('CsAboutusCardComponent', () => {
  let component: CsAboutusCardComponent;
  let fixture: ComponentFixture<CsAboutusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsAboutusCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsAboutusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
