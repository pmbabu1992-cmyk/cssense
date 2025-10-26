import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholdersComponent } from './placeholders.component';

describe('PlaceholdersComponent', () => {
  let component: PlaceholdersComponent;
  let fixture: ComponentFixture<PlaceholdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PlaceholdersComponent]
});
    fixture = TestBed.createComponent(PlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
