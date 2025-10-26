import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblechartsComponent } from './bubblecharts.component';

describe('BubblechartsComponent', () => {
  let component: BubblechartsComponent;
  let fixture: ComponentFixture<BubblechartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [BubblechartsComponent]
});
    fixture = TestBed.createComponent(BubblechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
