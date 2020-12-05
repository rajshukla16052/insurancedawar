import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageProtectionInsuranceComponent } from './mortgage-protection-insurance.component';

describe('MortgageProtectionInsuranceComponent', () => {
  let component: MortgageProtectionInsuranceComponent;
  let fixture: ComponentFixture<MortgageProtectionInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageProtectionInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageProtectionInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
