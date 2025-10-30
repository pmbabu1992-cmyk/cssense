import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUsersListComponent } from './total-users-list.component';

describe('TotalUsersListComponent', () => {
  let component: TotalUsersListComponent;
  let fixture: ComponentFixture<TotalUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalUsersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
