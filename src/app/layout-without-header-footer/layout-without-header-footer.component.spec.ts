import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithoutHeaderFooterComponent } from './layout-without-header-footer.component';

describe('LayoutWithoutHeaderFooterComponent', () => {
  let component: LayoutWithoutHeaderFooterComponent;
  let fixture: ComponentFixture<LayoutWithoutHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWithoutHeaderFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutWithoutHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
