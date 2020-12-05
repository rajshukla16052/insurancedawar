import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLiabilityInsuranceComponent } from './general-liability-insurance.component';

describe('GeneralLiabilityInsuranceComponent', () => {
  let component: GeneralLiabilityInsuranceComponent;
  let fixture: ComponentFixture<GeneralLiabilityInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLiabilityInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLiabilityInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
