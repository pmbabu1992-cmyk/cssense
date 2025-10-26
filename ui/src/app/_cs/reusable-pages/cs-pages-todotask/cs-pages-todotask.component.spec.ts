import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPagesTodotaskComponent } from './cs-pages-todotask.component';

describe('CsPagesTodotaskComponent', () => {
  let component: CsPagesTodotaskComponent;
  let fixture: ComponentFixture<CsPagesTodotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsPagesTodotaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPagesTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
