import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithHeaderFooterComponent } from './layout-with-header-footer.component';

describe('LayoutWithHeaderFooterComponent', () => {
  let component: LayoutWithHeaderFooterComponent;
  let fixture: ComponentFixture<LayoutWithHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWithHeaderFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutWithHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
