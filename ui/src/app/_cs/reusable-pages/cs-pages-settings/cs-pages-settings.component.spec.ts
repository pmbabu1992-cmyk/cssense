import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPagesSettingsComponent } from './cs-pages-settings.component';

describe('CsPagesSettingsComponent', () => {
  let component: CsPagesSettingsComponent;
  let fixture: ComponentFixture<CsPagesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsPagesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPagesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
