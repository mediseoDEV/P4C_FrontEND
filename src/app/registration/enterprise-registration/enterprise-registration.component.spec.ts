import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseRegistrationComponent } from './enterprise-registration.component';

describe('EnterpriseRegistrationComponent', () => {
  let component: EnterpriseRegistrationComponent;
  let fixture: ComponentFixture<EnterpriseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterpriseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
