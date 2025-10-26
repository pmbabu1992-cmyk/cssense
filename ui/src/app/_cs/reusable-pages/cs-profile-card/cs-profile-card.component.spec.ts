import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsProfileCardComponent } from './cs-profile-card.component';

describe('CsProfileCardComponent', () => {
  let component: CsProfileCardComponent;
  let fixture: ComponentFixture<CsProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsProfileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
