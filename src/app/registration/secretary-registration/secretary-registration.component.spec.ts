import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryRegistrationComponent } from './secretary-registration.component';

describe('SecretaryRegistrationComponent', () => {
  let component: SecretaryRegistrationComponent;
  let fixture: ComponentFixture<SecretaryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretaryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
