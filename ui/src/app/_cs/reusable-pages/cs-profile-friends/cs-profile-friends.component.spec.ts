import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsProfileFriendsComponent } from './cs-profile-friends.component';

describe('CsProfileFriendsComponent', () => {
  let component: CsProfileFriendsComponent;
  let fixture: ComponentFixture<CsProfileFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsProfileFriendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsProfileFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
