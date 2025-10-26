import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFiguresComponent } from './images-figures.component';

describe('ImagesFiguresComponent', () => {
  let component: ImagesFiguresComponent;
  let fixture: ComponentFixture<ImagesFiguresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ImagesFiguresComponent]
});
    fixture = TestBed.createComponent(ImagesFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
