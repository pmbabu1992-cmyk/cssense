import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapchartsComponent } from './treemapcharts.component';

describe('TreemapchartsComponent', () => {
  let component: TreemapchartsComponent;
  let fixture: ComponentFixture<TreemapchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TreemapchartsComponent]
});
    fixture = TestBed.createComponent(TreemapchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
